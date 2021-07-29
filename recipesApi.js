import firestore from "@react-native-firebase/firestore";

export function addRecipe(recipe, addComplete){

    firebase.firestore()
    .collection('listRecipes')
    .add({

    })
    
}


export async function getRecipe (recipeRetrieved){

    var recipeList = [];

    var snapshot = await firestore()
    .collection('listRecipes')
    .orderBy('name')
    .get()

    snapshot.forEach((doc) => {
        recipeList.push(doc.data());
    });

    console.log('foodlist: ', foodList);
    recipeRetrieved(recipeList);
}