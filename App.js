import React, { useState } from 'react';
import { 
  Switch, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const App = () => {
  const [darktheme, setDarktheme] = useState(false);
  const [result, setResult] = useState(' ');

  const colors = {
    dark: '#222520',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const calcul=(title)=>{
    if(title=='CL'){
      setResult('');
    }
    else if(title=='DL'){
      setResult(result.substring(0,result.length-1));
    }
    else if(title=='='){
      setResult(eval(result));

    }else setResult(result+title);
  }

  const Btn=({title})=>(
    <TouchableOpacity onPress={()=>calcul(title)} style={{padding:10,borderRadius:10,elevation:2,backgroundColor:
    getColor(colors.light1,colors.light1),height:70,width:70,margin:10}}>

      <Text style={{fontSize:37,color:'black',textAlign:'center',textAlignVertical:'center'}}>{title}</Text>

    </TouchableOpacity>
  )

  

  const getColor = (light, dark) => (darktheme ? dark : light);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: darktheme ? colors.dark : colors.light,
      }}
    >
      {/* Theme Switch */}
      <Switch
        value={darktheme}
        onValueChange={() => setDarktheme(!darktheme)}
        thumbColor={darktheme ? colors.light : colors.dark}
        trackColor={{
          true: colors.light2,
          false: colors.dark2,
        }}
      />

      {/* Display Result */}
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          textAlign: 'right',
          paddingRight: 20,
          width: '100%',
          marginTop:160,
          paddingBottom:20
        }}
      >
        {result}
      </Text>

      {/* Number Buttons in Row */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:getColor(colors.light1,colors.dark1),borderTopRightRadius:20,
          borderTopLeftRadius:20
          
        }}
      >
       <Btn title='CL' type='top'/>
       <Btn title='DL' type='top'/>
       <Btn title='/' type='top'/>
       <Btn title='%' type='top'/>
       <Btn title='7' type='number'/>
       <Btn title='8' type='number'/>
       <Btn title='9' type='number'/>
       <Btn title='*' type='right'/>
       <Btn title='4' type='number'/>
       <Btn title='5' type='number'/>
       <Btn title='6' type='number'/>
       <Btn title='-'  type='right'/>
       <Btn title='1' type='number'/>
       <Btn title='2' type='number'/>
       <Btn title='3' type='number'/>
       <Btn title='+'  type='right'/> 
       <Btn title='00' type='number'/> 
       <Btn title='0' type='number'/> 
       <Btn title='.' type='number'/> 
       <Btn title='='  type='right'/> 
      </View>
    </View>
  );
};

export default App;
