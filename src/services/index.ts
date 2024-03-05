import * as ingredientes from "./ingredientsService";
import * as preparations from "./preparationsService";
import * as recipes from "./recipesService";

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath:
      "https://wvleocraaqislpndgzjj.supabase.co/storage/v1/object/public/ingredients",
  },
};
