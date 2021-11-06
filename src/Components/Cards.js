import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  return (
    <div className='cards' id="residencesStart">
      <h1>First Year Residences</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Totem.jpg'
              text='Totem Park'
              label='1st Year'
              path='/totempark'
            />
            <CardItem
            src='/images/Vanier.jpg'
            text='Vanier'
            label='1st Year'
            path='/'
            />
            <CardItem
              src='images/Orchard.png'
              text='Orchard Commons'
              label='1st Year'
              path='/'
            />
          </ul>
          <br/>
          <br/>
          <h1>Upper Year and Graduate Residences</h1>
          <br/>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='images/Res_detail_Rits_exterior4_720x480.jpeg'
              text='Ritsumeikan-UBC House'
              label='2nd Year +'
              path='/Residences'
            />
            <CardItem
              src='images/waltergagetowers.jpeg'
              text='Walter Gage Towers'
              label='2nd Year +'
              path='/Residences'
            />
            <CardItem
              src='images/Fairview.jpeg'
              text='Fairview Crescent'
              label='2nd Year +'
              path='/Residences'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Marinedriveresidence.jpeg'
              text='Marine Drive Residence'
              label='2nd Year +'
              path='/Residences'
            />
             <CardItem
              src='images/Fraserhall.jpeg'
              text='Fraser Hall Residence'
              label='2nd Year +'
              path='/Residences'
            />
             <CardItem
              src='images/ponderosaCommons.jpeg'
              text='Ponderosa Commons'
              label='2nd Year +'
              path='/Residences'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/thunderbirdres.jpeg'
              text='Thunderbird Residence'
              label='2nd Year +'
              path='/Residences'
            />
             <CardItem
              src='images/ionahouse.jpeg'
              text='Iona House Residence'
              label='2nd Year +'
              path='/Residences'
            />
             <CardItem
              src='images/tallwoodhouse.jpeg'
              text='Brock Commons - Tallwood House Residence'
              label='2nd Year +'
              path='/Residences'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/exchangeres1.jpeg'
              text='Exchange Residence'
              label='2nd Year +'
              path='/Residences'
            />
             <CardItem
              src='images/orcansturgeon.jpeg'
              text='Orca and Sturgeon Residences'
              label='2nd Year +'
              path='/Residences'
            />
          </ul>
          <br/>
          <br/>
          <br/>
          <h1>Graduate and Mature Students</h1>
          <br/>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='images/Acadiapark.jpeg'
              text='Acadia Park Residence'
              label='Mature Student Families'
              path='/Residences'
            />
             <CardItem
              src='images/greencollege.jpeg'
              text='Green College Residence'
              label='Graduate Students and Postdoctoral Scholars'
              path='/Residences'
            />
             <CardItem
              src='images/stjohnscollege.jpeg'
              text='St. John&apos;s College Residence'
              label='Graduate Students, Postdoctoral Fellows and Visiting Scholars'
              path='/Residences'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;