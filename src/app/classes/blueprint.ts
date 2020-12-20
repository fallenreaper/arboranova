export class Blueprint {
  typeId: number = -1;
  groupId: number = -1;
  typeName: string = '';
  description: string = '';
  mass: number = -1;
  volume: number = -1;
  capacity: number = -1;
  portionSize: number = -1;
  raceId = -1;
  basePrice = -1;
  published: boolean = false;
  marketGroupId = -1;
  iconId = -1;
  soundId = -1;
  graphicId = -1;

  materialEffeciencyLevel = 0;
  timeEffeciencyLevel = 0;
  requiredItems: {id:number, name:string, quantity: number}[] = [];


  toJson = () => ({
    typeId: this.typeId,
    groupId: this.groupId,
    typeName: this.typeName,
    description: this.description,
    mass: this.mass,
    volume: this.volume,
    capacity: this.capacity,
    portionSize: this.portionSize,
    raceId: this.raceId,
    basePrice: this.basePrice,
    published: this.published,
    marketGroupId: this.marketGroupId,
    iconId: this.iconId,
    soundId: this.soundId,
    graphicId: this.graphicId,
    materialEffeciencyLevel: this.materialEffeciencyLevel,
    timeEffeciencyLevel: this.timeEffeciencyLevel,
    requiredItems: this.requiredItems
  })
  static fromJson(js: object): Blueprint {
    const bp = new Blueprint()
    bp.typeId = js['typeId'] || -1;
    bp.groupId = js['groupId'] || -1;
    bp.typeName = js['typeName'] || '';
    bp.description = js['description'] || '';
    bp.mass = js['mass'] || -1;
    bp.volume = js['volume'] || -1;
    bp.capacity = js['capacity'] || -1;
    bp.portionSize = js['portionSize'] || -1;
    bp.raceId = js['raceId'] || -1;
    bp.basePrice = js['basePrice'] || -1;
    bp.published = js['published'] || false;
    bp.marketGroupId = js['marketGroupId'] || -1;
    bp.iconId = js['iconId'] || -1;
    bp.soundId = js['soundId'] || -1;
    bp.graphicId = js['graphicId'] || -1;
    bp.materialEffeciencyLevel = js['materialEffeciencyLevel'] = -1,
    bp.timeEffeciencyLevel = js['timeEffeciencyLevel'] || '',
    bp.requiredItems = js['requiredItems'] || []
    return bp;
  }

  computedMineralCost = (): {}[] => this.requiredItems.map( item => {
    item.quantity = item.quantity * ( 1 - 0.01 * this.materialEffeciencyLevel);
    return item;
  })
}
