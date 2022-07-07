type Route = {
  origin: {
    to: string;
    from: string;
  };
  destination: {
    to: string;
    from: string;
  };
};

type Origin = Route["origin"];
type Destination = Route["destination"];

const typeOrigin: Origin = {
  to: "ktm",
  from: "htd",
};
