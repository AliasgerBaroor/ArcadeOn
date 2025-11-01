export interface FiltersGroupProps {
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

export interface FilterProps {
    f: FilterType;
    selected?: boolean;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
    dropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;
}

export type FilterType = {
    value: string;
    options: any[];
    selected?: boolean;
    selectedLabel?: string;
};

export type FiltersType = FilterType[];
export type DropdownType = { [value: string]: boolean };

export interface FiltersGroupProps {
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}
