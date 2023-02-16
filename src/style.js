import { Dimensions } from "react-native"

export const widthPercent = (width)=>{
    return Dimensions.get("screen").width * (width/100)
}

export const heightPercent = (height)=>{
    return Dimensions.get("screen").height * (height/100)
}