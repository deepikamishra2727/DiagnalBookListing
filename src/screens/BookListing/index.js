import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import listingPageOne from '../../JsonFiles/CONTENTLISTINGPAGE-PAGE1.json'
import listingPageTwo from '../../JsonFiles/CONTENTLISTINGPAGE-PAGE2.json'
import listingPageThree from '../../JsonFiles/CONTENTLISTINGPAGE-PAGE3.json'

export const BookListing = (props) => {

    const [listingData, setListingData] = useState([])
    const [searchClicked, setSearchClicked] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        let list1 = listingPageOne?.page?.contentItems?.content
        setListingData(list1)
    }, [])

    // Function for performing search
    const searchFunction = (text) => {
        let list1 = listingPageOne?.page?.contentItems?.content
        let list2 = listingPageTwo?.page?.contentItems?.content
        let list3 = listingPageThree?.page?.contentItems?.content
        let listing = [...list1, ...list2, ...list3]
        if (text == '') {
            setListingData(listing)
            setSearchClicked(false)
            return
        }
        let filteredData = listing.filter((item) => {
            return item.name.includes(text.trim());
        });
        setListingData(filteredData)
    }

    // Function for pagination functionality
    const paginationIncrement = () => {
        let list1 = listingPageOne?.page?.contentItems?.content
        let list2 = listingPageTwo?.page?.contentItems?.content
        let list3 = listingPageThree?.page?.contentItems?.content
        if (page == 1) {
            setPage(2)
            let listing = [...list1, ...list2]
            setListingData(listing)
        } else if (page == 2 || page == 3) {
            setPage(3)
            let listing = [...list1, ...list2, ...list3]
            setListingData(listing)
        }
    }

    // Render Header UI
    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.titleView}>
                    <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../../Images/Back.png')} style={styles.back} />
                    </TouchableOpacity>
                    {searchClicked ?
                        <View style={styles.searchView}>
                            <TextInput maxLength={20} onChangeText={(text) => { searchFunction(text) }} placeholder='Search by name' placeholderTextColor={'#60475A'} style={styles.textinputStyle} />
                        </View>
                        :
                        <Text style={styles.headerTxt}>{listingPageOne.page.title}</Text>
                    }
                </View>
                <TouchableOpacity onPress={() => setSearchClicked(!searchClicked)} style={styles.searchBtn}>
                    <Image source={require('../../Images/search.png')} style={styles.back} />
                </TouchableOpacity>
            </View>
        )
    }

    // Function to show the images according to the JSON data
    const imgToShow = (image) => {
        switch (image) {
            case "poster1.jpg":
                return require('../../Images/poster1.jpg')
                break;
            case "poster2.jpg":
                return require('../../Images/poster2.jpg')
                break;
            case "poster3.jpg":
                return require('../../Images/poster3.jpg')
                break;
            case "poster4.jpg":
                return require('../../Images/poster4.jpg')
                break;
            case "poster5.jpg":
                return require('../../Images/poster5.jpg')
                break;
            case "poster6.jpg":
                return require('../../Images/poster6.jpg')
                break;
            case "poster7.jpg":
                return require('../../Images/poster7.jpg')
                break;
            case "poster8.jpg":
                return require('../../Images/poster8.jpg')
                break;
            case "poster9.jpg":
                return require('../../Images/poster9.jpg')
                break;
            default:
                return require('../../Images/placeholder_for_missing_posters.png')
                break;
        }
    }

    // Render Listing Item UI
    const renderList = ({ item, index }) => {
        let img = imgToShow(item?.posterImage)

        return (
            <View style={styles.listBox}>
                <Image source={img} style={styles.imgBox} />
                <Text numberOfLines={2} style={styles.listText}>{item.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {listingData.length == 0 ?
                <Text style={styles.noRecordTxt}>No record(s) found</Text>
                :
                <FlatList
                    data={listingData}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    renderItem={renderList}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={() => paginationIncrement()} // Trigger data loading when reaching the end
                    onEndReachedThreshold={1}
                    showsVerticalScrollIndicator={false}
                />
            }
        </View>
    )
}