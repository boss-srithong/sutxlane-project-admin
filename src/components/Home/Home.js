import React, { useState,useEffect } from 'react'
import { View, Text,SafeAreaView ,StyleSheet,Image ,TextInput, TouchableOpacity ,Button ,ScrollView ,Dimensions, KeyboardAvoidingView} from 'react-native'
import Swiper from 'react-native-swiper'
import 'react-native-get-random-values';
import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBed,faBath ,faSearch,faSlidersH ,faEdit} from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {userValue} from '../../slice/usersSlice'
import {height,width} from '../constants'
import {settingSelectionMenuHomeValue ,settingSelectionMenuHomeAction} from '../../slice/configNavogationSlice'

const Home = ({navigation}) => {
    const userState= useSelector(userValue)
    const dispatch = useDispatch()
    const [menu , setMenu] = useState("property-news")  //my-property
    const settingSelectionMenuHome = useSelector(settingSelectionMenuHomeValue)
    const dataImageShow = ()=>{
        return(
            userState.map(e=>{
                return(
                    <TouchableOpacity key={e.id} onPress={()=>navigation.navigate("DetailHome")} style={{alignItems:'center'}}>
                        <Image source={{uri:e.imageUrl}} style={{width:"90%",height:200,resizeMode:'cover'}} />
                    </TouchableOpacity>
                )
            })
        )
    }
    useEffect(() => {
       
    }, [])

    const [mockup_data] = useState([
        {
          id:1,
          image:'https://static.posttoday.com/media/content/2018/11/12/D8359A2BC6B14AE981163E677F466165.jpg',
          type: 'condo',
          price: '฿ 2,700,000',
          num_room: 1,
          num_bath: 1,
          desc: 'Set around a lake at the foot of a hill less than 400 meters from the beach in Kamala, this development of stylishcondominiums offers 235 beautifully designed condominium apartments.',
        },
        {
          id:2,
          image:'https://www.sansiri.com/uploads/gallery/2018/07/17/650_4a38d314-0065-4cdf-90c8-94096629ecc7.jpg',
          type: 'condo',
          price: '฿ 5,900,00',
          num_room: 2,
          num_bath: 1,
          desc: ' Offer 175 sq.m. A fully furnished condo on a stunning waterfront. Biggest property with direct beach access.',
        },
        {
          id:3,
          image:'https://th1-cdn.pgimgs.com/listing/7974167/UPHO.76563246.R400X300/Blossom-Condo-Sathorn-Charoenrat-%E0%B8%9A%E0%B8%A5%E0%B8%AD%E0%B8%AA%E0%B8%8B%E0%B8%B1%E0%B9%88%E0%B8%A1-%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3-%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3-Thailand.jpg',
          type: 'Apartment',
          price: '฿ 6,300,000',
          num_room: 3,
          num_bath: 2,
          desc: 'Offer 175 sq.m. A fully furnished condo on a stunning waterfront. Biggest property with direct beach access.',
        },
        {
          id:4,
          image:'https://www.origin.co.th/wp-content/uploads/2019/08/DSC3469-1024x683.jpg',
          type: 'Apartment',
          price: '฿ 1,900,000',
          num_room: 2,
          num_bath: 2,
          desc: 'Allsopp & Allsopp are proud to present this stunning 1 bedroom apartment. Set in the extremely desirable Executive Tower, complete with mall on your doorstep, kids play area and park along with a gym and pool in the building itself. Great location for a family, to meet friends and amazing community feel. Almost penthouse level floor!',
        },
        {
          id:5,
          image:'https://static.posttoday.com/media/content/2018/11/12/D8359A2BC6B14AE981163E677F466165.jpg',
          type: 'condo',
          price: '฿ 2,700,000',
          num_room: 1,
          num_bath: 1,
          desc: 'Set around a lake at the foot of a hill less than 400 meters from the beach in Kamala, this development of stylishcondominiums offers 235 beautifully designed condominium apartments.',
        }
    ])

    const [mockup_data2] = useState([
        {
          id:1,
          image:'https://static.posttoday.com/media/content/2018/11/12/D8359A2BC6B14AE981163E677F466165.jpg',
          type: 'condo',
          price: '฿ 2,700,000',
          num_room: 1,
          num_bath: 1,
          desc: 'Set around a lake at the foot of a hill less than 400 meters from the beach in Kamala, this development of stylishcondominiums offers 235 beautifully designed condominium apartments.',
        },
        {
          id:2,
          image:'https://www.sansiri.com/uploads/gallery/2018/07/17/650_4a38d314-0065-4cdf-90c8-94096629ecc7.jpg',
          type: 'condo',
          price: '฿ 5,900,00',
          num_room: 2,
          num_bath: 1,
          desc: ' Offer 175 sq.m. A fully furnished condo on a stunning waterfront. Biggest property with direct beach access.',
        },
    ])

    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.input}>
                <View style={{width:"90%",position:'relative',backgroundColor:"white",paddingLeft:10*width,height:height*35,borderRadius:height*25,alignItems:'center',flexDirection:'row',justifyContent:'flex-start'}}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <View style={{width:2,backgroundColor:'#e1e5eb',height:"100%",marginLeft:10*width,}}/>
                    <TextInput placeholder="search"/>
                    <View style={{position:'absolute',right:20*width,flexDirection:'row',height:"100%",alignItems:'center'}}>
                        <View style={{width:2,backgroundColor:'#e1e5eb',height:"100%"}}/>
                        <TouchableOpacity  onPress={()=>navigation.navigate('Filter')}>
                            <FontAwesomeIcon icon={faSlidersH} style={{marginLeft:20*width}} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <Swiper activeDotColor="tomato" showsButtons={true} nextButton={<Text></Text>} prevButton={<Text></Text>} autoplay={true} autoplayTimeout={5}> 
                    {dataImageShow()}
                </Swiper>
            </View>
            <View style={styles.detail}>
                {settingSelectionMenuHome.selectionHome === "property-news" ?(
                    <React.Fragment>
                        <View style={{width:"100%",height:30*height,flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity style={{width:"50%",backgroundColor:'white',borderWidth:1,padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'white'}} >
                                <Text style={{...styles.text1,fontWeight:'bold'}}>Property News</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:"50%",padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'white'}} onPress={()=>dispatch(settingSelectionMenuHomeAction('my-property'))}>
                                <Text style={{...styles.text1,fontWeight:'bold',color:'grey'}}>My Property</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView  style={{borderTopWidth:1}}>
                            {   
                                mockup_data.map((item, index) => (
                                    <View style={styles.news}>
                                        <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                            <Image source={{uri:item.image}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                        </View>
                                        <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                            <Text>{item.price}</Text>
                                            <View style={{flexDirection:'row',}}>
                                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                                    <Text>{item.num_room}</Text>
                                                    <View style={{width:5}}/>
                                                    <FontAwesomeIcon icon={faBed} />
                                                </View>
                                                <View style={{width:10}}/>
                                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                                    <Text>{item.num_bath}</Text>
                                                    <View style={{width:5}}/>
                                                    <FontAwesomeIcon icon={faBath} />
                                                </View>
                                            </View>
                                            <Text numberOfLines={4}  style={{width:"100%"}}>{item.desc}</Text>
                                        </View>
                                    </View>
                                ))
                            }   
                        </ScrollView>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        <View style={{width:"100%",height:30*height,flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity style={{width:"50%",padding:10,alignItems:'center',justifyContent:'center',borderBottomWidth:2,borderBottomColor:'white'}} onPress={()=>dispatch(settingSelectionMenuHomeAction('property-news')) }>
                                <Text style={{...styles.text1,fontWeight:'bold',color:'grey'}}>Property News</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:"50%",padding:10,alignItems:'center',borderWidth:1,justifyContent:'center',borderBottomWidth:1,borderBottomColor:'white'}} >
                                <Text style={{...styles.text1,fontWeight:'bold'}}>My Property</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{borderTopWidth:1}}>
                            {
                                mockup_data.map((item, index) => (                         
                                    <View style={styles.news}>
                                        <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                                            <Image source={{uri:item.image}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                                        </View>
                                        <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                                            <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                                <Text>{item.price}</Text>
                                                <TouchableOpacity onPress={()=>navigation.navigate("EditProperty")}>
                                                    <FontAwesomeIcon icon={faEdit} color="tomato"/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{flexDirection:'row',}}>
                                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                                    <Text>{item.num_room}</Text>
                                                    <View style={{width:5}}/>
                                                    <FontAwesomeIcon icon={faBed} />
                                                </View>
                                                <View style={{width:10}}/>
                                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                                    <Text>{item.num_bath}</Text>
                                                    <View style={{width:5}}/>
                                                    <FontAwesomeIcon icon={faBath} />
                                                </View>
                                            </View>
                                            <Text numberOfLines={4}  style={{width:"100%"}}>{item.desc}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </React.Fragment>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#edf0ee'
    },
    input:{
        flex:0.2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    input2:{
        width:"90%",
        height:50,
        backgroundColor:'white',
        borderRadius:25,
        borderColor:"white",
        borderWidth:2,
        marginLeft:10,
        marginRight:10,
        fontSize:16,
        paddingLeft:20,
        marginTop:20
    },
    content:{
        flex:0.38,
    },
    detail:{
        flex:0.5,
        padding:20,
        paddingTop:0,
    },
    text1:{
        color:'orange',
        fontSize:20,
        marginBottom:10,

    },
    news:{
        height:120,
        width:"100%",
        // backgroundColor:'pink',
        margin:10,
        marginLeft:0,
        flexDirection:'row'
    },
})
export default Home
