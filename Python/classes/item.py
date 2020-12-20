
import json

class Item:
    """An Ingame Item"""
    _name = ""
    _item_id = -1
    # _blueprint_id = None # Or int
    
    def has_blueprint(self) -> bool:
        return self._blueprint_id is not None

    def __init__(self, key, name):
        self._name = name if name is not None else ""
        self._item_id = key if key is not None else -1
        # self._blueprint_id = -1

    def __repr__(self):
        return json.dumps( self.to_json() )

    def __str__(self):
        return self._name

    def get_name(self):
        return self._name

    def get_id(self):
        return self._item_id

    def to_json(self) -> dict:
        return {
            "id": int(self._item_id),
            "name": self._name
        }

    @staticmethod
    def from_json(js: dict) -> object:
        item = Item("", -1)
        item._name = js["name"] if "name" in js else ""
        item._item_id = js["id"] if "id" in js else -1
        return item
