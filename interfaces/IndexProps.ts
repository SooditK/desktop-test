export interface IndexProps {
  data: {
    station_code: number;
    name: string;
    url: string;
  };
}

export interface TabsProps {
  rides: [
    {
      id: number;
      origin_station_code: number;
      station_path: number[];
      destination_station_code: number;
      date: string;
      map_url: string;
      state: string;
      city: string;
    }
  ];
}

export type FullData = IndexProps & TabsProps;

export interface DropdownProps {
  dropdown: boolean;
  setDropdown: (dropdown: boolean) => void;
  setDropDownValue: (value: string) => void;
  dropDownValue: string;
  cities?: string[];
}
