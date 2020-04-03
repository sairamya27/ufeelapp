import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Linking, FlatList, ScrollView, Platform, Dimensions } from 'react-native';
import { Lost, ListItem } from 'react-native-elements'
//import { scale, verticalScale, moderateScale } from '../../scaler.js';

const { height } = Dimensions.get('window');

class ResourcesScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
     <View style= {{flex: 1}}>       
         <ScrollView
           ref={(scrollView) => { this.scrollView = scrollView; }}
            contentContainerStyle={{
              maxheight: 1000,
            }}
            scrollToOverflowEnabled={true}>
        <View style= {styles.header}>
          <View style= {{flex: 1}}>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Apps</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.headspace.com/headspace-meditation-app')}>
                <Image source={require('../assets/images/headspaceicon.png')} style={styles.img} />
              </TouchableOpacity>
                <Text style= {styles.text1}>Headspace</Text>
                <Text style= {styles.text2}>"Headspace is your guide to health and happiness. It’s the simple way to let go of stress and get a better night’s rest. Learn to relax with guided meditations and mindfulness techniques that bring calm, wellness and balance to your life in just a few minutes a day."</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.calm.com/');}}>
                <Image source={require('../assets/images/headspaceicon.png')} style={styles.img} />
              </TouchableOpacity>
                <Text style= {styles.text1}>Calm</Text>
                <Text style= {styles.text2}>"Calm is the #1 app for Sleep, Meditation and Relaxation. Join the millions experiencing better sleep, lower stress, and less anxiety with our guided meditations, Sleep Stories, breathing programs, stretching exercises, and relaxing music. Calm is recommended by top psychologists, therapists, and mental health experts."</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://mymoodpath.com/en/');}}>
                <Image source={require('../assets/images/headspaceicon.png')} style={styles.img} />
              </TouchableOpacity>
                <Text style= {styles.text1}>Moodpath</Text>
                <Text style= {styles.text2}>"Do you struggle with some of your thoughts and feelings? Are you looking for ways to improve your emotional well-being? Moodpath is your personalized mental health companion. Try it out and find a place to reflect and get information, encouragement, and guidance."</Text>
            </View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Websites</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.psychologytoday.com/us')}>
                <Text style= {styles.text1}>Psychology Today</Text>
                <Text style= {styles.text2}>"A a group of renowned psychologists, academics, psychiatrists and writers to contribute their thoughts and ideas. We're a live stream of what's happening in 'psychology today'."</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.nami.org/Personal-Stories/-It-Gets-Better#')}>
                <Text style= {styles.text1}>NAMI</Text>
                <Text style= {styles.text2}>"National Alliance on Mental Illness -- Personal Stories"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.nami.org/collegeguide/download')}>
                <Text style= {styles.text1}>NAMI</Text>
                <Text style= {styles.text2}>"National Alliance on Mental Illness -- Starting the Conversation: College and Your Mental Health"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.futureswithoutviolence.org/');}}>
                <Text style= {styles.text1}>Futures Without Violence</Text>
                <Text style= {styles.text2}>"From domestic violence and child abuse, to bullying and sexual assault, our groundbreaking programs, policy development, and public action campaigns are designed to prevent and end violence against women and children around the world."</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.cdc.gov/violenceprevention/intimatepartnerviolence/teendatingviolence/fastfact.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fviolenceprevention%2Fintimatepartnerviolence%2Fteen-dating-violence.html');}}>
                <Text style= {styles.text1}>Preventing Teen Dating Violence</Text>
                <Text style= {styles.text2}>"Teen dating violence (TDV) is a type of intimate partner violence. It occurs between two people in a close relationship. TDV includes four types of behavior:{"\n"}
                1. Physical violence is when a person hurts or tries to hurt a partner by hitting, kicking, or using another type of physical force.{"\n"}
                2. Sexual violence is forcing or attempting to force a partner to take part in a sex act, sexual touching, or a non-physical sexual event (e.g., sexting) when the partner does not or cannot consent.{"\n"}
                3. Psychological aggression is the use of verbal and non-verbal communication with the intent to harm another person mentally or emotionally and/or exert control over another person.{"\n"}
                4. Stalking is a pattern of repeated, unwanted attention and contact by a partner that causes fear or concern for one’s own safety or the safety of someone close to the victim."</Text>
              </TouchableOpacity>
            </View>
          <View style= {styles.cont}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.scu.edu/title-ix/')}>
              <Text style= {styles.text1}>Title IX</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('tel:4085513043')}>
              <Text style= {styles.text2}>Call (408)551-3043 if you or someone you know is a victim of sexual misconduct.</Text>
            </TouchableOpacity>
          </View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Books and Info</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.activeminds.org/');}}>
                <Text style= {styles.text1}>Active Minds</Text>
                <Text style= {styles.text2}>"Mental Health Coalition & Program"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.everydayhealth.com/reviews/best-self-books-mental-health-anxiety/');}}>
                <Text style= {styles.text1}>Every Day Health</Text>
                <Text style= {styles.text2}>"Source for books on mental health and anxiety"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
                <Text style= {styles.text1}>Additional Books</Text>
                <Text style= {styles.text2}>
                    • Full Catastrophe Living (Revised Edition): Using the Wisdom of Your Body and Mind to Face Stress, Pain, and Illness by Jon Kabat-Zinn{"\n"}
                    • Mindfulness in Plain English by Henepola Gunaratana{"\n"} 
                    • The Happiness Trap: How to Stop Struggling and Start Living: A Guide to ACT by Russ Harris{"\n"} 
                    • The Mindfulness and Acceptance Workbook for Anxiety: A Guide to Breaking Free from Anxiety, Phobias, and Worry Using Acceptance and Commitment Therapy by John P. Forsyth and Georg H. Eifert{"\n"}
                    • Self-Compassion: The Proven Power of Being Kind to Yourself by Dr. Kristin Neff{"\n"}
                    • Things Might Go Terribly, Horribly Wrong: A Guide to Life Liberated from Anxiety M. Troy DuFrene and Kelly G. Wilson{"\n"}                        
                    • The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma by Bessel van der Kolk{"\n"}
                    • Reasons to Stay Alive by Matt Haig{"\n"}
                    • The Anxiety and Phobia Workbook by Edmund J. Bourne{"\n"}
                    • Unfu*k Yourself: Get Out of Your Head and Into Your Life by Gary John Bishop{"\n"}
                    • Feeling Good: The New Mood Therapy by David D. Burns, MD{"\n"}
                    • Trauma and Recovery by Judith Herman{"\n"}
                    • Mindfulness Skills Workbook by Debra Burdick{"\n"}
                    • 101 Trauma Informed Interventions by Linda A. Curran
                </Text>
            </View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Podcasts</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://open.spotify.com/show/0184ojF3hjFhKfktahQK4G?si=UbCvKkcJRzO1pes2MIJHhA')}>
                <Text style= {styles.text1}>Savvy Psychologist</Text>
                <Text style= {styles.text2}>"She is like listening to a well informed aunt give advice"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://open.spotify.com/show/464IOIGOsIUZPDV7ani1VB?si=zz-oqbDQR7urfq4lMht1BA');}}>
                <Text style= {styles.text1}>Black Mental Health</Text>
                <Text style= {styles.text2}>"Provides an African American lense to mental"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://open.spotify.com/show/2zS57s6LwstXGD9gkoKWsC?si=LRWJVGB8RoibxSQKTfTncA');}}>
                <Text style= {styles.text1}>Mental Health in Pop Culture</Text>
                <Text style= {styles.text2}>"Professor and students analyze the sort of normalization of mental health issues in movies/ media/ television. Could be good to break stereotypes"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://open.spotify.com/show/3i5TCKhc6GY42pOWkpWveG');}}>
                <Text style= {styles.text1}>The Happiness Lab</Text>
                <Text style= {styles.text2}>"Yale professor Dr. Laurie Santos will take you through the latest scientific research and share some surprising and inspiring stories that will forever alter the way you think about happiness."</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.headContain}>
              <Text style= {styles.subHead}>Videos</Text>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=S8bJ3YlgL1Q')}>
                <Text style= {styles.text1}>Casually Suicidal</Text>
                <Text style= {styles.text2}>"TEDx talk, Adelphi University"</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=m-8tQ_TYLgk');}}>
                <Text style= {styles.text1}>How to Connect with Depressed Friends</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=JUedQ0_EGCQ');}}>
                <Text style= {styles.text1}>Living With High Functioning Anxiety</Text>
              </TouchableOpacity>
            </View>
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=2E4_m5dUE9s');}}>
                <Text style= {styles.text1}>Just Eat More</Text>
              </TouchableOpacity>
            </View> 
            <View style= {styles.cont}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=Sdk7pLpbIls');}}>
                <Text style= {styles.text1}>Athletes and Mental Health</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create ({
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHead: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    height: height, 
    alignItems: 'center',
  },
  cont: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
  },
  headContain: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  img: {
    height: 50,
    width: 50,
  }

});

export default ResourcesScreen;
