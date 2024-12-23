type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}


function compare( top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position" | "weight">): AllType {
  return {
    name: top.name as string,
    color: top.color as string,
    position: bottom.position as number,
    weight: bottom.weight as number,
  }
}