export interface FoodParameter {
    ParameterId: number;
    ResVal: string;
    Min: string | null;
    Max: string | null;
    Median: string | null;
    NumberOfDeterminations: string | null;
    Sources: string[];
    SourceFood: string | null;
}