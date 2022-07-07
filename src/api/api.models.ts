export interface Datas {
  data: {
    attributes: {
      description: string;
      "last-update": string;
      title: string;
    };

    id: string;
    meta: any[];
    type: string;
  };
  included: any[];
}
