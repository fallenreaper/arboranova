
import sys
import connection
from typing import Tuple, List
import queries
from classes.blueprint import Blueprint
from classes.item import Item
from pprint import pprint
import requests
import json

CON = connection.Connection()

def get_blueprint_by_id(item_id: int) -> Blueprint:
    # print("ITEM ID", item_id)
    if not CON:
        return
    rows = CON.query(queries.GET_BLUEPRINT_BY_ID.format(item_id=item_id))
    if len(rows) > 0:
        row = rows[0]
    else:
        print(f"No Blueprint found for itemID: {item_id}")
        return None
    bp = Blueprint()
    bp._item_id = row[0]
    bp._name = row[2]
    # print(bp._item_id, bp._name)
    output_items = CON.query(queries.GET_BLUEPRINT_PRODUCT.format(item_id=str(bp._item_id)))
    if len(output_items) > 0:
        output_item = output_items[0]
        # print(output_item)
        _output = Item(output_item[0], output_item[2])
        bp._output_item = _output
    else:
        output_item = None
    # Get Blueprint Required Items
    query_string = queries.GET_BLUEPRINT_INFO_FOR_ITEM_BY_ID.format(item_id=bp._item_id)
    r = []
    _idlist = []
    for item in CON.query(query_string):
        _baseitem, _itemid, _quantity = item
        r.append(item)
        _idlist.append(str(_itemid))
    if len(_idlist) > 0:
        rslt = CON.query(queries.GET_NAME_FOR_ITEM_IDS.format(id_list=",".join(_idlist), len_of_list=len(_idlist)))
        m = { key: name for key, name in rslt }
        r = [(_base, _id, _quant) + (m[_id],) for _base, _id, _quant in r ]
        bp._required_items = [(Item(_id, _name), quant) for _, _id, quant, _name in r]
    # print(bp.to_json())
    return bp

def get_blueprint(name: str) -> Blueprint:
    if not CON:
        print("No Connection.")
        return
    if name.endswith("Blueprint"):
        name = " ".join(name.split(" ")[:-1])

    #Get Blueprint id, name, and output item.
    rows = CON.query(queries.GET_ITEM_NAMED.format(name=name + ' Blueprint'))
    if len(rows)> 0:
        row = rows[0]
    else:
        print(f"Not Blueprint for {name}")
        return None
    print("Info")
    print(row)
    bp = Blueprint()
    bp._item_id = row[0]
    bp._name = row[2]
    output_item = CON.query(queries.GET_BLUEPRINT_PRODUCT.format(item_id=str(bp._item_id)))[0]
    # print(output_item)
    _output = Item(output_item[0], output_item[2])
    bp._output_item = _output
    # Get Blueprint Required Items
    query_string = queries.GET_BLUEPRINT_INFO_FOR_ITEM.format(name=name)
    r = []
    _idlist = []
    for item in CON.query(query_string):
        _baseitem, _itemid, _quantity = item
        r.append(item)
        _idlist.append(str(_itemid))
    rslt = CON.query(queries.GET_NAME_FOR_ITEM_IDS.format(id_list=",".join(_idlist), len_of_list=len(_idlist)))
    m = { key: name for key, name in rslt }
    r = [(_base, _id, _quant) + (m[_id],) for _base, _id, _quant in r ]
    bp._required_items = [(Item(_id, _name), quant) for _, _id, quant, _name in r]
    # print(bp.to_json())
    return bp
    
def get_items_like(item: str) -> List:
    results = CON.query(queries.GET_ITEMS_LIKE.format(name=item))
    item_list = []
    for row in results:
        _id, _groupid, _name, _description, _mass, _volume, _capacity, _portionsize, _raceid, _baseprice, _published, _marketgroupid, _iconid, _soundid, _graphicid = row
        # print(f"Looking up: {_name}")
        # data = get_blueprint(_name)
        # print(data)
        # if data is not None and len(data) > 0:
        item_list.append(_name)
    # print(item_list)
    return item_list

# def get_item_by_id(item: str) -> List:
#     results = CON.query(queries.GET_ITEM_BY_ID.format(item_id=item))
#     return results[0]

def get_items_in_id_list(ids: List[int]) -> List:
    rows = CON.query(queries.GET_ITEMS_BY_IDS.format(id_list=",".join([str(i) for i in ids]), len_of_list=str(len(ids))))
    item_list = []
    for row in rows:
        _id, _groupid, _name, _description, _mass, _volume, _capacity, _portionsize, _raceid, _baseprice, _published, _marketgroupid, _iconid, _soundid, _graphicid = row
        item_list.append(Item(_id, _name))
    return item_list

def recursively_get_base_items(item) -> Tuple[object, List, List]:
    bp = get_blueprint(item)
    sub_bps = []
    base_items = []
    if bp is None:
        return bp, sub_bps, base_items
    def recurse(item_id: int):
        sub = get_blueprint_by_id(str(item_id))
        if sub is None:
            base_items.append(item_id)
            return
        [recurse(i._item_id) for i, quant in sub._required_items]
        sub_bps.append(sub)
    [recurse(i._item_id) for i, quant in bp._required_items]
    return bp, sub_bps, get_items_in_id_list(base_items)

def get_base_material_requirements(material=0, time=0, main_structure_bonus=0.0, component_structure_bonus=0.0, count=1, item=None ) -> List:
    """Get All Materials from Items"""
    if item is None:
        print("No Item selected.")
        return {}
    print("Data for Method:",material, time, main_structure_bonus, component_structure_bonus, count, item)
    bp, required_bps, basic_materials = recursively_get_base_items(item)
    if bp is None:
        print("No BP Selected")
        return {}
    bp.set_effeciency(material, time)
    bp.set_structure_bonus(main_structure_bonus)
    print("Required BP list:")
    pprint([ r.to_json() for r in required_bps])
    print("Required Items to build")
    base_data = {}
    for item in basic_materials:
        base_data[item.get_id()] = item.to_json()
        _q = [quant for i, quant in bp.required_items_to_build() if item.get_id() == i.get_id()]
        base_data[item.get_id()]["quantity"] = _q[0] if len(_q) > 0 else 0

    req_items = {i.get_id(): quant for i, quant in bp.required_items_to_build()}
    for b in required_bps:
        b.set_effeciency(10,20)
        b.set_structure_bonus(component_structure_bonus)
        for item, quant in b.required_items_to_build():
            if item.get_id() not in base_data.keys():
                base_data[item.get_id()] = item.to_json()    
                base_data[item.get_id()]["quantity"] = 0
            if b._output_item is not None and b._output_item.get_id() in req_items:
                base_data[item.get_id()]["quantity"] = base_data[item.get_id()]["quantity"] + ( req_items[b._output_item.get_id()] * quant)
    print("Base Materials:")
    if count > 1:
        for k in base_data.keys():
            base_data[k]["quantity"] *= count
    pprint([ i for i in base_data.values() if i["quantity"] > 0])
    return list(base_data.values())

def getAllOresAndProcessedGoods() -> dict:
    q = 'select g.groupID, g.groupName, t.typeID, t.typeName, itm.materialTypeID , it.typeName , itm.quantity from invGroups g join invTypes t on g.groupID = t.groupID join invTypeMaterials itm on itm.typeID = t.typeID join invTypes it on itm.materialTypeID = it.typeID where g.categoryID = 25 and g.published = TRUE ;'
    results = CON.query(q)
    data = {}
    for r in results:
        _groupId, _groupName, _typeId, _typeName, _materialId, _materialName, _quantity = r
        if _typeName not in data:
            data[_typeName] = {
                "name": _typeName,
                "id": _typeId,
                "groupId": _groupId,
                "groupName": _groupName,
                "reprocessed": []
            }
        data[_typeName]["reprocessed"].append({
            "name": _materialName,
            "id": _materialId,
            "quantity": _quantity
        })
    return [x for x in data.values()]

def main():
    global CON
    CON = connection.Connection()
    # print(json.dumps(getAllOresAndProcessedGoods()))
    # return
    try:
        material = int(sys.argv[1])
        time = int(sys.argv[2])
        structure_bonus = float(sys.argv[3])
        part_structure_bonus = float(sys.argv[4])
        item = " ".join(sys.argv[5:])
    except:
        item = " ".join(sys.argv[1:])
        try:
            material = int(input("What is Material Effeciency Level of Blueprint?  "))
        except:
            material = 0
        try:
            time = int(input("What is the Time Effeciency Level of Blueprint?  "))
        except:
            time = 0
        try:
            structure_bonus = float(input("If there a Rig Bonus for END ITEM, what is it? (4.2?)"))
        except:
            structure_bonus = 0.0
        try:
            part_structure_bonus = float(input("If there a Rig Bonus for Cap Parts, what is it? (4.2?) ( if 'n/a' if none )   "))
        except:
            part_structure_bonus = 0.0

    d = get_base_material_requirements(material=material, time=time, main_structure_bonus=structure_bonus, component_structure_bonus=part_structure_bonus, item=item)
    howmany=input("How Many?")
    try:
        int(howmany)
    except:
        howmany = 1
    s = ["{} {}".format(i["name"], i["quantity"] * int(howmany)) for i in d]
    print( ", ".join(s))
    try:
        quote_data = requests.post("https://evepraisal.com/appraisal.json?market=jita&persist=no&price_percentage=92.5", data="\n".join(s)).json()["appraisal"]
        pprint(quote_data)
        resell_data = requests.post("https://evepraisal.com/appraisal.json?market=jita&persist=no&price_percentage=95", data="\n".join(s)).json()["appraisal"]
    except:
        print("Unable to Generate a Quote")
        return
    print("""The Information Is Dumped Below
-------------------
{}
-------------------
    Location: {}
    Payout to Manufacturers.
    Sell Price: ${:,.2f}
    Buy Price: ${:,.2f}
    
    Resell Minimum:
    Sell Price: ${:,.2f}
    Buy Price: ${:,.2f}""".format("\n".join(s), quote_data["market_name"], quote_data["totals"]["sell"], quote_data["totals"]["buy"], resell_data["totals"]["sell"], resell_data["totals"]["buy"]))

if __name__ == '__main__':
    main()
