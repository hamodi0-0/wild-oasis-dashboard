import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Could not load cabins");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://eibqnzdfdrodibpnjwyb.supabase.co/storage/v1/object/public/cabin-names/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath //check if we already have an image path and no new image was uploaded
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-names/${imageName}`;

  let query = supabase.from("cabins");
  //CREATE CABIN
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //UPDATE CABIN
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Could not create cabin");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-names")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await query.delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function deleteCabin(id) {
  console.log(id);
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Could not delete cabin");
  }
}
