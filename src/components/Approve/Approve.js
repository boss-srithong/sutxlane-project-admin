import React, { useState,useEffect } from 'react'
import { View, Text,SafeAreaView ,StyleSheet,Image ,Button ,ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import 'react-native-get-random-values';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBed, faBath, faAngleLeft, faTrash} from '@fortawesome/free-solid-svg-icons'
const width = Dimensions.get('window').width/384
const height = Dimensions.get('window').height/781.3333333333334
const Approve = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.main}>
            <TouchableOpacity style={{flexDirection:'row',flex:0.08,position:'absolute',right:10,marginTop:10}} onPress={()=>navigation.goBack()}>
                <Text style={{fontSize:width*15,color:"grey"}}>Cancel</Text>
            </TouchableOpacity>
            <View style={{height:height*70,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:15*width,color:'#2c3949',fontWeight:'bold'}}>Approval</Text>
            </View>
            <View style={styles.detail}>
                <Text style={{...styles.text1,fontWeight:'bold'}}>Waiting Approval</Text>
                <ScrollView >
                    <View style={styles.news}>
                        <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                            <Image source={{uri:'https://www.tqm.co.th/gallery/3637.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                        </View>
                        <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                            <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                <Text>฿ 5,900,000</Text>
                                <TouchableOpacity onPress={()=>alert("delete")}>
                                    <FontAwesomeIcon icon={faTrash} color="red"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBed} />
                                </View>
                                <View style={{width:10}}/>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBath} />
                                </View>
                            </View>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                        </View>
                    </View>
                    <View style={styles.news}>
                        <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                            <Image source={{uri:'https://www.tqm.co.th/gallery/3637.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                        </View>
                        <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                            <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                <Text>฿ 5,900,000</Text>
                                <TouchableOpacity onPress={()=>alert("delete")}>
                                    <FontAwesomeIcon icon={faTrash} color="red"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBed} />
                                </View>
                                <View style={{width:10}}/>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBath} />
                                </View>
                            </View>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                        </View>
                    </View>
                    <View style={styles.news}>
                        <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                            <Image source={{uri:'https://www.tqm.co.th/gallery/3637.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                        </View>
                        <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                            <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                <Text>฿ 5,900,000</Text>
                                <TouchableOpacity onPress={()=>alert("delete")}>
                                    <FontAwesomeIcon icon={faTrash} color="red"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBed} />
                                </View>
                                <View style={{width:10}}/>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBath} />
                                </View>
                            </View>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                        </View>
                    </View>
                    <View style={styles.news}>
                        <View style={{width:"50%",backgroundColor:'grey',height:"100%"}}>
                            <Image source={{uri:'https://www.tqm.co.th/gallery/3637.jpg'}} style={{width:"100%",height:"100%",resizeMode:'cover'}} />
                        </View>
                        <View style={{flexDirection:'column',width:"50%",marginLeft:10}}>
                            <View style={{width:"90%",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                <Text>฿ 5,900,000</Text>
                                <TouchableOpacity onPress={()=>alert("delete")}>
                                    <FontAwesomeIcon icon={faTrash} color="red"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBed} />
                                </View>
                                <View style={{width:10}}/>
                                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <Text>2</Text>
                                    <View style={{width:5}}/>
                                    <FontAwesomeIcon icon={faBath} />
                                </View>
                            </View>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lsufdsfdsmdoumxplica</Text>
                            <Text numberOfLines={1}  style={{width:"100%"}}>Lfdfdfipsufdsfdsmdod</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{marginTop:30}}>                    
                    <Button
                        title="Approve"
                        color="#2c3949"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                    <Button
                        title="Approve All"
                        color="grey"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View>
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
        marginTop:40,
        // backgroundColor:'red'
        
    },
    detail:{
        flex:0.95,
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
export default Approve
