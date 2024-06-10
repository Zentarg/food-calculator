import { FoodParameter } from "./FoodParameter";

export interface FoodData {
    FoodId: number;
    FoodNameDa: string;
    FoodNameEn: string;
    Parameters: {[key: number]: FoodParameter};
}