interface Characteristic {
    name: string;
    value: string;
}

type CharacteristicsMapper = (
    characteristics: Characteristic[],
    supplier: string
) => Promise<Characteristic[]>;


export const mapGatewayCharacteristics: CharacteristicsMapper = async (
    characteristics,
    supplier
) => {
    // TODO
    return characteristics;
};

export const mapSupplierCharacteristics: CharacteristicsMapper = async (
    characteristics,
    supplier
) => {
    // TODO
    return characteristics;
};

