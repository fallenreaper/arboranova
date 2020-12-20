
from typing import List, Tuple
from .item import Item
import json
import math

class Blueprint:
    """A Blueprint is the outline of how to make an item"""
    _item_id: int = -1
    _name: str = ""
    _output_item: Item = None
    _required_items: Tuple[Item, int] = []
    _material_effeciency = 0
    _time_effeciency = 0
    _structure_bonus = 0

    def __init__(self):
        self._item_id = -1
        self._name = ""
        self._output_item = None
        self._required_items = []
        self._material_effeciency = 0
        self._time_effeciency = 0
        self._structure_bonus = 0

    def __repr__(self):
        return json.dumps( self.to_json() )

    def __str__(self) -> str:
        return self._name

    def get_name(self):
        return self._name

    def get_id(self) -> int:
        return self._item_id 

    def set_effeciency(self, material: int, time: int):
        """Set the Effeciency of the Blueprint"""
        if material > 10:
            material = 10
        if material < 0:
            material = 0
        if time > 20:
            time = 20
        if time < 0:
            time = 0
        self._material_effeciency = material
        self._time_effeciency = time
    
    def set_structure_bonus(self, structure_bonus):
        """Set Structure Bonus"""
        if structure_bonus < 0: 
            structure_bonus = 0
        if structure_bonus > 4.2:
            structure_bonus = 4.2
        self._structure_bonus = structure_bonus

    def required_items_to_build(self):
        """Calculates the Required Materials based on the Material Effeciency of the Blueprint"""
        return [ (item, math.floor(quant * (1 - 0.01) * (1 - (0.01 * self._structure_bonus)) * (1 - (0.01 * self._material_effeciency)))) for item, quant in self._required_items]
        

    def to_json(self) -> dict:
        """Returns a Dict Representation"""
        return {
            "id": self._item_id,
            "name": self._name,
            "outputItem": self._output_item.to_json() if self._output_item is not None else None,
            "materialEffeciency": self._material_effeciency,
            "timeEffeciency": self._time_effeciency,
            "structureBonus": self._structure_bonus,
            "requiredItems": [[i.to_json(), quant] for i, quant in self._required_items]
        }

    @staticmethod
    def from_json(js : dict) -> object:
        """Parse a Dict to a Blueprint object"""
        bp = Blueprint()
        bp._item_id = js["id"] if "id" in js else -1
        bp._name = js["name"] if "name" in js else ""
        bp._material_effeciency = js["materialEffeciency"] if "materialEffeciency" in js else 0
        bp._time_effeciency = js["timeEffeciency"] if "timeEffeciency" in js else 0
        bp._structure_bonus = js["structureBonus"] if "structureBonus" in js else 0
        bp._output_item = Item.from_json(js["outputItem"]) if "outputItem" in js else None
        bp._required_items = [(Item.from_json(i), quant) for i, quant in js["requiredItems"]] if "requiredItems" in js else []
        return bp
