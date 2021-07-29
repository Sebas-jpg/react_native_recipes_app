import firestore from "@react-native-firebase/firestore";

export async function getRecipes(recipeRetrieved){

    var recipeList = []
    var snapshot = await firestore()
                        .collection('listRecipes')
                        .get()
    snapshot.forEach((doc) => {
        recipeList.push(doc);
    })
    recipeRetrieved(recipeList);
}