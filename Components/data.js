class data {
    constructor(
        createdOn,
        updatedOn,
        id,
        images,
        files,
        name,
        dayOfWeeksOpen,
        openTime,
        closeTime,
        slotTimeSize,
        costPerSlot,
        active,
        establishment,
        sports
    )
    {
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.id = id;
        this.images = images;
        this.files = files;
        this.name = name;
        this.dayOfWeeksOpen = dayOfWeeksOpen;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.slotTimeSize = slotTimeSize;
        this.costPerSlot = costPerSlot;
        this.active = active;
        this.establishment = establishment;
        this.sports = sports;
    }
}

export default data;