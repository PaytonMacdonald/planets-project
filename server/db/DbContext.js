import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import mongoose from "mongoose";

class DbContext {
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  Star = mongoose.model("Star", StarSchema);
  Planet = mongoose.model("Star", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema);
}

export const dbContext = new DbContext();
