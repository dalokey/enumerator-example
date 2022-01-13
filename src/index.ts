import { Enum, Enumerator } from "@dalokey/enumerator";

class ColourType extends Enum<ColourType, number> {
    static Red: ColourType = new ColourType("red", 1001);
    static Blue: ColourType = new ColourType("blue", 1002);
    static Green: ColourType = new ColourType("Green", 1003);

    getName = (): string => {
        return this.Name;
    }

    static favoriteColour = (e: number): ColourType => {
        if (e <= 50) {
            return ColourType.Red
        } else {
            return ColourType.Blue
        }
    }
}

class BodyPart extends Enum<BodyPart, number>{
    static Hand: BodyPart = new BodyPart("red", 1001);
    static HandColour: BodyPart = new BodyPart("red", 1001);
}

// get enum name
let name = ColourType.Red.Name;

// get enum value
let value = ColourType.Blue.Value;

// get all the enum elements
let listOfColourTypes = Enumerator.getAll(ColourType);

// get enum by name
let blueColourName = Enumerator.getByName(ColourType, "blue");

// get enum by value
let blueColourValue = Enumerator.getByValue(ColourType, 1001);

// check if enum elements are equal
let blueEnum = ColourType.Blue;

let isThisBlue = ColourType.Red.equals(blueEnum);
let isThisRed = ColourType.Red.equals(blueEnum);

// check if name is valid
let isBlueAValidName = Enumerator.isNameValid(ColourType, "blue");

// check if value is valid
let is1001AValidValue = Enumerator.isValueValid(ColourType, 1001);

// check if my custom feature can return enum element name
let redName = ColourType.Red.getName();

// check if my custom feature can return my favorite colour
let myFavoriteColour = ColourType.favoriteColour(300);