export default function numberDoors(wardrobeWidth) {
    const minWidth = 20;
    const maxWidth = 55;

    const maxDoors = Math.floor(wardrobeWidth / minWidth);
    const minDoors = Math.ceil(wardrobeWidth / maxWidth);

    return ({ min: minDoors, max: maxDoors });
}