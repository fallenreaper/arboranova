
GET_ITEM_NAMED = "select * from invTypes where typeName = '{name}' limit 1;"
GET_ITEMS_LIKE = "select * from invTypes where typeName like '%{name}%';"
GET_ITEM_BY_ID = "select * from invTypes where typeID = {item_id} limit 1;"
GET_ITEMS_BY_IDS = "select * from invTypes where typeID in ({id_list}) limit {len_of_list};"

GET_BLUEPRINT_BY_ID = "select it.* from industryActivityProducts iap join invTypes it on it.typeID = iap.typeID where iap.productTypeID = {item_id};"
GET_BLUEPRINT_INFO_FOR_ITEM = "select it.typeID, iam.materialTypeID, iam.quantity from industryActivityMaterials iam inner join invTypes it on iam.typeID = it.typeID where activityID = 1 and typeName = '{name} Blueprint';"
GET_BLUEPRINT_INFO_FOR_ITEM_BY_ID = "select iam.typeID, iam.materialTypeID, iam.quantity from industryActivityMaterials iam where iam.typeID = {item_id}"
GET_NAME_FOR_ITEM_IDS = "select it.typeID, it.typeName from invTypes it where it.typeID in ({id_list}) limit {len_of_list};"
GET_BLUEPRINT_PRODUCT = "select it.* from industryActivityProducts iap join invTypes it on iap.productTypeID = it.typeID where iap.typeID = {item_id};"
