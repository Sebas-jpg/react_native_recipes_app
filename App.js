import React, { useState, useEffect } from 'react';
import { ToastAndroid, ThemeProvider , Button, Text, View, Image, ActivityIndicator, Switch, StyleSheet } from 'react-native';
import { useIsFocused, useTheme, DefaultTheme, DarkTheme, getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Avatar, Icon, colors } from 'react-native-elements';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    listColor:"#404040",
    textColor: "white",
    inputColor: "#808080",
    btnColor: "#124f75"

  }
}


const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    listColor:"#FFF",
    textColor:"black",
    inputColor: "#f5f5f5",
    btnColor: "#24a0ed"
  }
}

const list = [
  {
    name: 'Lemon drizzle',
    image_url: 'http://icons.iconseeker.com/png/fullsize/halloween-2004/pumpkin-pie.png',
    subtitle: 'Recipe from uncle Ben',
    ingredients: "\n2 lemons,\n200g of flour, \n300ml of water",
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 1,
    favourite: false
  },
  {
    name: 'Chocolate fudge cake',
    image_url: 'https://icons.iconarchive.com/icons/ridessnow/u-r-what-u-eat/128/pie-icon.png',
    subtitle: 'My own recipe',
    ingredients: '\n1 bar of chocolate, \n200g of flour, \n300ml of milk',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 2,
    favourite: false
  },
  {
    name: 'Carrot cake',
    image_url: 'https://static.wikia.nocookie.net/spiritfarer/images/6/68/Meat_Pie.png/revision/latest?cb=20200830235144',
    subtitle: 'Annie likes it',
    ingredients: '\n5 large carrots, \n200g of flour, \n300ml of water',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 3,
    favourite: true
  },
  {
    name: 'Chocolate brownie',
    image_url: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pumpkin-pie-2808082-2331948.png',
    subtitle: 'Quick and simple',
    ingredients: '\n2 bars of chocolate, \n200g of flour, \n300ml of milk',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 15 minutes, \n3. Enjoy!',
    id: 4,
    favourite: false
  },
  {
    name: 'Victoria sponge',
    image_url: 'https://findicons.com/files/icons/1189/iconfactory_thanksgiving_2008/256/pumpkin_pie.png',
    subtitle: 'Grandma`s favourite',
    ingredients: '\n2 fruits of choice, \n200g of flour, \n300ml of water',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 5,
    favourite: false
  },
  {
    name: 'Apple pie',
    image_url: 'https://static.wikia.nocookie.net/spiritfarer/images/6/68/Meat_Pie.png/revision/latest?cb=20200830235144',
    subtitle: 'Best for hot days',
    ingredients: '\n10 large apples, \n200g of flour, \n300ml of water',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 6,
    favourite: true
  },
  {
    name: 'Sticky toffee pudding',
    image_url: 'https://www.shareicon.net/data/256x256/2017/04/22/885115_pie_512x512.png',
    subtitle: 'Kate`s recipe',
    ingredients: '\n200g of toffee, \n200g of flour, \n300ml of water',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 7,
    favourite: false
  },
  {
    name: 'Strawberry pie',
    image_url: 'https://bloodstainedritualofthenight.wiki.fextralife.com/file/Bloodstained-Ritual-of-The-Night/strawberry-pie-food-bloodstained-ritual-of-the-night-wiki-guide128px.png',
    subtitle: 'Perfect for summer',
    ingredients: '\n600g of strawberries, \n200g of flour, \n300ml of water',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 8,
    favourite: false
  },
  {
    name: 'Coffee cake',
    image_url: 'https://static.wikia.nocookie.net/spiritfarer/images/b/b9/Berry_Pie.png/revision/latest?cb=20200830223841',
    subtitle: 'Yummy!',
    ingredients: '\n200g of ground coffee, \n200g of flour, \n300ml of milk',
    instructions: '\n1. Mix all the ingredients, \n2. Bake it for 20 minutes, \n3. Enjoy!',
    id: 9,
    favourite: true
  }
]

function HomeScreen({ navigation }) {

  const {colors} = useTheme();

  return (
    <ScrollView>
      <View>
        <Text style={{ color: colors.textColor, marginTop: 30, alignSelf: 'center', fontSize: 20 }}>Home screen</Text>
      </View>
    </ScrollView>
  );
}

function RecipesScreen ({ navigation }){
//https://reactnativeelements.com/docs/listitem

// getRecipe = async () => {
  //   const recipe = await firestore()
  //   .collection('listRecipes')
  //   .doc('1')
  //   .get();
  //   console.log(recipe);
  // }

    // firestore()
    // .collection('listRecipes')
    // .get()
    // .then(querySnapshot => {
    //   console.log('Totalusers: ', querySnapshot.size);
    //   querySnapshot.forEach(documentSnapshot => {
    //     console.log('recipe id: ', documentSnapshot.id,
    //     documentSnapshot.get());
    //   });
    // });

//     const Recipes = () => {
//       const [loading, setLoading] = useState(true);
//       const [recipes, setRecipes] = useState([]);

//       useEffect(() => {
//         const subscriber = firestore()
//         .collection('listRecipes')
//         .onSnapshot(querySnapshot => {
//           const recipes = [];

//           querySnapshot.forEach(documentSnapshot => {
//             recipes.push({
//               ...documentSnapshot.data(),
//               key: documentSnapshot.id,
//             });
//           });

//           setRecipes(recipes);
//           setLoading(false);

//         });
//         //unsub
//         return () => subscriber();
//       }, []);
//       if (loading) {
//         return <ActivityIndicator />;
//       }

// return (
//     <FlatList
//     data={users}
//     renderItem={({ item }) => (
//       <View>
//         <Text>User ID: {item.id}</Text>
//         <Text>Username: {item.name}</Text>
//       </View>
//     )}
//     />
// );
//     }

//   }

const {colors} = useTheme();



return (
  <View>
    <ScrollView>
      <View style={{marginBottom: 24}}>
        <TouchableOpacity style={{position: 'absolute', top: 0, right: 0, left: 0, backgroundColor: colors.btnColor}}
         onPress={() => {
           navigation.navigate('Add recipe')
         }}>
          <Text style={{fontSize: 18, color: colors.inputColor, textAlign: 'center'}}>Add a new recipe</Text>
        </TouchableOpacity>
      </View>

    {
      list.map((l, i) => (
    <ListItem 
    containerStyle={{backgroundColor: colors.backgroundColor}}
    
    key={i} bottomDivider onPress={() => {
      navigation.navigate('Recipe', {
        itemId: l.id,
        otherParam: l.name,
        image: l.image_url,
        ingredients: l.ingredients,
        instructions: l.instructions
      });
    }}>

        <Avatar source={{ uri: l.image_url }} />
        <ListItem.Content>
          <ListItem.Title style={{color: colors.textColor}}>{l.name}</ListItem.Title>
          <ListItem.Subtitle style={{color: colors.textColor}}>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      ))
    }
    </ScrollView>
    </View>
  );
}
//     return (
//       <View>
//         {


// firestore()
// .collection('listRecipes')
// .get()
// .then(querySnapshot => {
//   console.log('Total recipes: ', querySnapshot.size);

//           <ListItem key={i} bottomDivider onPress={() => {
//             navigation.navigate('Recipe', {
//               itemId: rId,
//               otherParam: rName,
//               recipeIngredients: rIngredients,
//               image: rImage_url
//             });
//           }}>
//             <Avatar source={{ uri: rImage_url}} />
//               <ListItem.Content>
//                 <ListItem.Title>{rName}</ListItem.Title>
//                 <ListItem.Subtitle>{rSubtitle}</ListItem.Subtitle>
//               </ListItem.Content>
//           </ListItem>

//           );
//         })
//       )
//       }
//     </View>
// );




//     firestore()
//     .collection('listRecipes')
//     .get()
//     .then(querySnapshot => {
//       console.log('Total recipes: ', querySnapshot.size);
      
      
//       querySnapshot.forEach(documentSnapshot => {

//         let name = documentSnapshot.get('name');
//         let image = documentSnapshot.get('image_url');
//         let subtitle = documentSnapshot.get('subtitle');
//         let recipeIngredients = documentSnapshot.get('ingredients');
//         let itemId = documentSnapshot.get('id');

//         console.log('1: ', name);
//         <ListItem key={itemId} bottomDivider onPress={() => {
//           navigation.navigate('Recipe', {
//               // name: lname,
//               // image: limage_url,
//               // subtitle: lsubtitle,
//               // recipeIngredients: lingredients,
//               // itemId: lid
//             });
//           }}>
            
//             <Avatar source={{ uri: limage_url}} />
//               <ListItem.Content>
//                 <ListItem.Title>{lname}</ListItem.Title>
//                 <ListItem.Subtitle>{lsubtitle}</ListItem.Subtitle>
//               </ListItem.Content>
//           </ListItem>

//           })
//         }
//         )
//         }
//       </View>
//     );
// }
//           

function AddRecipeScreen ({ navigation }) {
  
  // const [text, onChangeText] = React.useState("name")
  // const [number, onChangeNumber] = React.useState(null)
  
  const showToast = () => {
    ToastAndroid.show("A new recipe has been added!", ToastAndroid.SHORT);
  };
  
  //empty init values
  const [nId, setnId] = useState('');
  const [nImageurl, setnImageurl] = useState('');
  const [nName, setnName] = useState('');
  const [nSubtitle, setnSubtitle] = useState('');
  const [nIngredients, setnIngredients] = useState('');
  const [nInstructions, setnInsctructions] = useState('');

  const {colors} = useTheme();

  return(
    <View>
      <ScrollView>
        <Text
        style={{
        alignSelf: 'center',
        color: colors.textColor,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20
        }}>
        Add a new recipe to your list!
        </Text>
        <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: colors.inputColor,
          textAlign: 'center',
          color: colors.textColor
        }}
        value={nId}
        onChangeText= {nId => setnId(nId)}
        placeholder="Id"
        keyboardType="numeric"
      />
          <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: colors.inputColor,
            textAlign: 'center',
            color: colors.textColor
          }}
          value={nImageurl}
          onChangeText= {nImageurl => setnImageurl(nImageurl)}
          placeholder="Image url"
          />
          <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            backgroundColor: colors.inputColor,
            color: colors.textColor
          }}
          value={nName}
          onChangeText= {nName => setnName(nName)}
          placeholder="Cake name"
          />
          <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            backgroundColor: colors.inputColor,
            color: colors.textColor
          }}
          value={nSubtitle}
          onChangeText= {nSubtitle => setnSubtitle(nSubtitle)}
          placeholder="Short description"
          />
          <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            backgroundColor: colors.inputColor,
            color: colors.textColor
          }}
          value={nIngredients}
          onChangeText= {nIngredients => setnIngredients(nIngredients)}
          placeholder="Ingredients"
          />
          <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            backgroundColor: colors.inputColor,
            color: colors.textColor
          }}
          value={nInstructions}
          onChangeText= {nInstructions => setnInsctructions(nInstructions)}
          placeholder="Instructions"
          />
          <TouchableOpacity
          style={{
          alignItems: 'center',
          padding: 10,
          backgroundColor: colors.btnColor,
          marginTop: 10}}
          onPress={() => {
            navigation.navigate('Recipes', {
              nId,
              nImageurl,
              nName,
              nSubtitle,
              nIngredients,
              nInstructions
            },showToast() ,console.log('new cake added: ', nId, nImageurl, nName, nSubtitle, nIngredients, nInstructions), 
            list.push({name: nName,
              image_url: nImageurl,
              subtitle: nSubtitle,
              ingredients: nIngredients,
              instructions: nInstructions,
              id: nId,
              favourite: false
            }))
          }}
          // {
          //   name: 'name9',
          //   image_url: 'https://via.placeholder.com/128',
          //   subtitle: 'some text',
          //   ingredients: 'asdasd, asdasd',
          //   id: 9,
          //   favourite: true
          // }
            >
            <Text
            style={{color: colors.textColor}}>Add new recipe</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

function RecipeScreen(props) {
  
  const {colors} = useTheme();

  //unquote the objects from json
  const uotherParam = props.route.params.otherParam.replace(/"([^"]+)":/g, '$1:');
  const uingredients = props.route.params.ingredients.replace(/"([^"]+)":/g, '$1:');
  const uinstruction = props.route.params.instructions.replace(/"([^"]+)":/g, '$1:');

  return (
      <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity
          style={{
          alignSelf: 'flex-end',
          padding: 10,
          marginRight: 5,
          backgroundColor: colors.btnColor,
          marginTop: 10}}
          onPress={() => {
            var item = list.find(x => x.id == props.route.params.itemId);
            if (item) {
              item.favourite = true;
            }
            console.log('Recipe id ' + props.route.params.itemId + ' favourite value = ' + item.favourite);
          }
        }
          // {
          //   name: 'name9',
          //   image_url: 'https://via.placeholder.com/128',
          //   subtitle: 'some text',
          //   ingredients: 'asdasd, asdasd',
          //   id: 9,
          //   favourite: true
          // }
            >
            <Text
            style={{color: colors.textColor}}>Favourite</Text>
          </TouchableOpacity>

      <Image
      source={{ uri: props.route.params.image }}
      style= {{width: 300, height: 300, borderWidth: 1, marginTop: 30, marginBottom: 30 }} >
      </Image>

      <Text style={{ color: colors.textColor, marginBottom: 10, fontSize: 20 }}>{uotherParam}</Text>
      <Text style={{ color: colors.textColor, marginBottom: 10, marginLeft: 20, alignSelf: 'flex-start' }}>Ingredients: {uingredients}</Text>
      <Text style={{ color: colors.textColor, marginBottom: 10, marginLeft: 20, alignSelf: 'flex-start' }}>Instruction: {uinstruction}</Text>


  </View>
    </ScrollView>
  );
}


function FavouritesScreen({ navigation }) {


  const {colors} = useTheme();

  const isFocused = useIsFocused()

    useEffect(() => {
        console.log('fav list updated');
        }    , [isFocused])
      

  //filter the list and leave only objects where favourite === true
  const listFav = list.filter(function(item){
    return item.favourite === true;
  });

  return (
    <View>
      <ScrollView>
      {
        listFav.map((l, i) => (
          <ListItem 
          containerStyle={{backgroundColor: colors.backgroundColor}}
          
          key={i} bottomDivider onPress={() => {
        navigation.navigate('Favourite recipe', {
          itemId: l.id,
          otherParam: l.name,
          image: l.image_url,
          ingredients: l.ingredients,
          instructions: l.instructions
        });
      }}>

          <Avatar source={{ uri: l.image_url }} />
          <ListItem.Content>
            <ListItem.Title style={{color: colors.textColor}}>{l.name}</ListItem.Title>
            <ListItem.Subtitle style={{color: colors.textColor}}>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        ))
      }
      </ScrollView>
      </View>
    );
}

function FavRecipeScreen(props) {
  
  const {colors} = useTheme();

  const NoFavToast = () => {
    ToastAndroid.show("This recipe has been removed from your favourites!", ToastAndroid.SHORT);
  };

  // unquote 
  const uotherParam = props.route.params.otherParam.replace(/"([^"]+)":/g, '$1:');
  const uingredients = props.route.params.ingredients.replace(/"([^"]+)":/g, '$1:');
  const uinstruction = props.route.params.instructions.replace(/"([^"]+)":/g, '$1:');



  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}>

          <TouchableOpacity
            style={{
            alignSelf: 'flex-end',
            padding: 10,
            marginRight: 5,
            backgroundColor: colors.btnColor,
            marginTop: 10}}
            onPress={() => {
              var item = list.find(x => x.id == props.route.params.itemId);
              if (item) {
                item.favourite = false;
              }
              NoFavToast();
              console.log('Recipe id ' + props.route.params.itemId + ' favourite value = ' + item.favourite);
            }
          }
            // {
            //   name: 'name9',
            //   image_url: 'https://via.placeholder.com/128',
            //   subtitle: 'some text',
            //   ingredients: 'asdasd, asdasd',
            //   id: 9,
            //   favourite: true
            // }
              >
              <Text
              style={{color: colors.textColor}}>Unfavourite</Text>
            </TouchableOpacity>

        <Image
        source={{ uri: props.route.params.image }}
        style= {{width: 300, height: 300, borderWidth: 1, marginTop: 30, marginBottom: 30 }} >
        </Image>

        <Text style={{ color: colors.textColor, marginBottom: 10, fontSize: 20 }}>{uotherParam}</Text>
        <Text style={{ color: colors.textColor, marginBottom: 10, marginLeft: 20, alignSelf: 'flex-start' }}>Ingredients: {uingredients}</Text>
        <Text style={{ color: colors.textColor, marginBottom: 10, marginLeft: 20, alignSelf: 'flex-start' }}>Instruction: {uinstruction}</Text>

      </View>
    </ScrollView>
  );
}

function CalculatorScreen({ navigation }) {
  
  const fromGramsToast = () => {
    ToastAndroid.show(grams + 'g is equal to ' + gramstolb + "lb " + ozRounded + "oz.", ToastAndroid.LONG);
  };

  const toGramsToast = () => {
    ToastAndroid.show(lb + 'lb ' + oz + "oz is equal to " + gramsRounded + "g.", ToastAndroid.LONG);
  };

  const invalidInput = () => {
    ToastAndroid.show('You need to input a number.', ToastAndroid.LONG);
  };

  const {colors} = useTheme();

  const [grams, setGrams] = useState('');
  const [oz, setOz] = useState('');
  const [lb, setLb] = useState('');

  let gramstolb;
  let remainder;
  let resttooz;
  let ozRounded;

  let lbtograms;
  let oztograms;
  let SumLbOz;
  let gramsRounded;



  return (
    <View>
      <ScrollView>
        <TextInput
        style={{
          height: 40,
          margin: 12,
          marginTop: 20,
          borderWidth: 1,
          borderRadius: 5,
          textAlign: 'center',
          color: colors.textColor,
          backgroundColor: colors.inputColor
        }}
        value={grams}
        onChangeText= {grams => setGrams(grams)}
        placeholder="Enter value in grams"
        keyboardType="numeric"
        />
        

        <TouchableOpacity style={{padding: 5, backgroundColor: colors.btnColor, marginTop: 10}}
         onPress={() => {
          if(isNaN(grams)){
            console.log(grams, ' is not a valid input');
            invalidInput(); //toast
          }
          else {
            gramstolb = parseInt(grams/454),
            remainder = grams%454,
            resttooz = remainder/28.35,
            ozRounded = parseFloat(resttooz).toFixed(1),
            fromGramsToast();
          }
        }}>
          <Text style={{fontSize: 16, color: colors.textColor, textAlign: 'center'}}>Tap to convert to lb and oz</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <TextInput
          style={{
            height: 40,
            width: '42%',
            margin: 12,
            marginLeft: 16,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            color: colors.textColor,
            backgroundColor: colors.inputColor
          }}
          value={lb}
          onChangeText= {lb => setLb(lb)}
          placeholder="Enter value in lb"
          keyboardType="numeric"
          />

          <TextInput
          style={{
            height: 40,
            width: '42%',
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            color: colors.textColor,
            backgroundColor: colors.inputColor
          }}
          value={oz}
          onChangeText= {oz => setOz(oz)}
          placeholder="Enter value in oz"
          keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={{padding: 5, backgroundColor: colors.btnColor}}
         onPress={() => {
          if(isNaN(lb) || isNaN(oz)){
            invalidInput();
            console.log(lb + ' or/and ' + oz + ' is invalid input')
          }
          else{
           lbtograms = lb*454,
           oztograms = oz*28.35,
           SumLbOz = lbtograms+=oztograms, 
           gramsRounded = parseFloat(SumLbOz).toFixed(2),
           toGramsToast(); 
          }
          }}>
          <Text style={{fontSize: 16, color: colors.textColor, textAlign: 'center'}}>Tap to convert to grams</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function PreferencesScreen({ navigation }) {
  
  const {colors} = useTheme();
  const scheme = useColorScheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.prefsContainer}>
      <View>
        <Text style={{
          alignSelf: 'flex-start',
          marginTop: 10,
          marginLeft: 15,
          color: colors.textColor
        }}>
          Dark mode
        </Text>
        
        <Switch
        style={styles.darkSwitch}
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#46bdbf" : "#f4f3f4"}
        alignSelf= 'flex-end'
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
      </View>
</View>

  );
}

const styles = StyleSheet.create({
  prefsContainer: {
    // flexDirection: 'row'
  },
  darkSwitch: {
    marginTop: -20,
    marginRight: 10
  }
});

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Recipe" component={RecipeScreen} /> */}
      {/* <HomeStack.Screen name="Favourites" component={FavouritesScreen} /> */}
      {/* <HomeStack.Screen name="Calculator" component={CalculatorScreen} /> */}
      {/* <HomeStack.Screen name="Preferences" component={PreferencesScreen} /> */}
    </HomeStack.Navigator>
  );
}
const RecipesStack = createStackNavigator();
function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen name="Recipes" component={RecipesScreen} />
      <RecipesStack.Screen name="Recipe" component={RecipeScreen} />
      <RecipesStack.Screen name="Add recipe" component={AddRecipeScreen} />
      {/* <RecipesStack.Screen name="Calculator" component={CalculatorScreen} /> */}
      {/* <RecipesStack.Screen name="Preferences" component={PreferencesScreen} /> */}
    </RecipesStack.Navigator>
  );
}

const FavouritesStack = createStackNavigator();
function FavouritesStackScreen() {
  return (
    <FavouritesStack.Navigator>
      {/* <FavouritesStack.Screen name="Recipes" component={RecipesScreen} /> */}
      {/* <FavouritesStack.Screen name="Recipe" component={RecipeScreen} /> */}
      <FavouritesStack.Screen name="Favourites" component={FavouritesScreen} />
      <FavouritesStack.Screen name="Favourite recipe" component={FavRecipeScreen} />
      {/* <FavouritesStack.Screen name="Calculator" component={CalculatorScreen} /> */}
      {/* <FavouritesStack.Screen name="Preferences" component={PreferencesScreen} /> */}
    </FavouritesStack.Navigator>
  );
}

const CalculatorStack = createStackNavigator();
function CalculatorStackScreen() {
  return (
    <CalculatorStack.Navigator>
      {/* <CalculatorStack.Screen name="Recipes" component={RecipesScreen} /> */}
      {/* <CalculatorStack.Screen name="Recipe" component={RecipeScreen} /> */}
      {/* <CalculatorStack.Screen name="Favourites" component={FavouritesScreen} /> */}
      <CalculatorStack.Screen name="Calculator" component={CalculatorScreen} />
      {/* <CalculatorStack.Screen name="Preferences" component={PreferencesScreen} /> */}
    </CalculatorStack.Navigator>
  );
}

const PreferencesStack = createStackNavigator();
function PreferencesStackScreen() {
  return (
    <PreferencesStack.Navigator>
      {/* <PreferencesStack.Screen name="Recipes" component={RecipesScreen} /> */}
      {/* <PreferencesStack.Screen name="Recipe" component={RecipeScreen} /> */}
      {/* <PreferencesStack.Screen name="Favourites" component={FavouritesScreen} /> */}
      {/* <PreferencesStack.Screen name="Calculator" component={CalculatorScreen} /> */}
      <PreferencesStack.Screen name="Preferences" component={PreferencesScreen} />
    </PreferencesStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  
  const scheme = useColorScheme();
  const {colors} = useTheme();

  return (
    // <NavigationContainer theme={customDarkTheme}>
      <NavigationContainer theme={scheme == 'dark' ? customDarkTheme : customDefaultTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-outline" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Recipes" component={RecipesStackScreen} options={{ 
            tabBarLabel: 'Recipes',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-face" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Favourites" component={FavouritesStackScreen} options={{ 
            tabBarLabel: 'Favourites',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-circle" color={color} size={24} />
            ),
          }} />
          <Tab.Screen name="Calculator" component={CalculatorStackScreen} options={{ 
            tabBarLabel: 'Calculator',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Preferences" component={PreferencesStackScreen} options={{ 
            tabBarLabel: 'Preferences',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star-box" color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}