<?php

  $region1Data = array(291879, 193561, 116230);
  $region2Data = array(43008, 6259, 10000);
  $region3Data = array(289960, 71484, 367962);
  $region4Data = array(133115, 144114, 547320);
  $region5Data = array(237370, 267503, 1643325);

  $region1Color = '#da826a';
  $region2Color = '#a3795d';
  $region3Color = '#99b5bf';
  $region4Color = '#e4dab6';
  $region5Color = '#7a9e89';

  //$chartData = new stdClass();
  //$chartArray = array();
  $title = "";
  // Swtich based on region
  switch($_REQUEST['region']) {
    //Asia
    case 'China':
    case 'Japan':
    case 'Mongolia':
    case 'Bangladesh':
    case 'Bhutan':
    case 'India':
    case 'Maldives':
    case 'Nepal':
    case 'Brunei Darussalam':
    case 'South Korea':
    case 'North Korea':
    case 'Cambodia':
    case 'Indonesia':
    case "Lao People's Democratic Republic":
    case 'Malaysia':
    case 'Myanmar':
    case 'Philippines':
    case 'Thailand':
    case 'Vietnam':
    case 'Sri Lanka':
    case 'Australia':
    case 'New Zealand':
    case 'Fiji':
    case 'Solomon Islands':
    case 'Papua New Guinea':
    case 'Vanuatu':
    case 'New Caledonia':
    case 'French Polynesia':
      $barData = $region1Data;
      $barColor = $region1Color;
      $title = "Asia Scripture Distribution Goals for 2015";
      break;

    //Middle East
    case 'Pakistan':
    case 'Tajikistan':
    case 'Kyrgyzstan':
    case 'Kazakhstan':
    case 'Afghanistan':
    case 'Turkmenistan':
    case 'Uzbekistan':
    case 'Iran':
    case 'Azerbaijan':
    case 'Turkey':
    case 'Syrian Arab Republic':
    case 'Iraq':
    case 'Kuwait':
    case 'Jordan':
    case 'Israel':
    case 'Lebanon':
    case 'Cyprus':
    case 'Oman':
    case 'Yemen':
    case 'Saudi Arabia':
    case 'United Arab Emirates':
    case 'Qatar':
    case 'Egypt':
      $barData = $region2Data;
      $barColor = $region2Color;
      $title = "Middle East Scripture Distribution Goals for 2015";
      break;

    //Africa
    case 'Burundi':
    case 'Comoros':
    case 'Djibouti':
    case 'Eritrea':
    case 'Ethiopia':
    case 'Kenya':
    case 'Madagascar':
    case 'Malawi':
    case 'Mauritius':
    case 'Mozambique':
    case 'Reunion':
    case 'Rwanda':
    case 'Seychelles':
    case 'Somalia':
    case 'Uganda':
    case 'Tanzania':
    case 'Zambia':
    case 'Zimbabwe':
    case 'Angola':
    case 'Cameroon':
    case 'Central African Republic':
    case 'Chad':
    case 'Congo':
    case 'DRC Congo':
    case 'Equitorial Guinea':
    case 'Gabon':
    case 'Sao Tome':
    case 'Algeria':
    case 'Libya':
    case 'Morocco':
    case 'Sudan':
    case 'Tunisia':
    case 'Botswana':
    case 'Lesotho':
    case 'Namibia':
    case 'South Africa':
    case 'Swaziland':
    case 'Benin':
    case 'Burkina Faso':
    case 'Cape Verde':
    case 'Cote DIvoire':
    case 'Gambia':
    case 'Ghana':
    case 'Guinea':
    case 'Guinea-Bissau':
    case 'Liberia':
    case 'Mali':
    case 'Mauritania':
    case 'Niger':
    case 'Nigeria':
    case 'Senegal':
    case 'Sierra Leone':
    case 'Togo':
      $barData = $region3Data;
      $barColor = $region3Color;
      $title = "Africa Scripture Distribution Goals for 2015";
      break;

      //Europe
    case 'Belarus':
    case 'Bulgaria':
    case 'Czech Republic':
    case 'Hungary':
    case 'Poland':
    case 'Moldova':
    case 'Romania':
    case 'Russian Federation':
    case 'Slovakia':
    case 'Ukraine':
    case 'Denmark':
    case 'Estonia':
    case 'Finland':
    case 'Iceland':
    case 'Ireland':
    case 'Latvia':
    case 'Lithuania':
    case 'Norway':
    case 'Sweden':
    case 'United Kingdom':
    case 'Albania':
    case 'Bosnia':
    case 'Croatia':
    case 'Greece':
    case 'Italy':
    case 'Malta':
    case 'Portugal':
    case 'Slovenia':
    case 'Spain':
    case 'Macedonia':
    case 'Serbia':
    case 'Austria':
    case 'Belgium':
    case 'France':
    case 'Germany':
    case 'Netherlands':
    case 'Switzerland':
    case 'Armenia':
    case 'Georgia':
      $barData = $region4Data;
      $barColor = $region4Color;
      $title = "Europe Scripture Distribution Goals for 2015";
      break;

      //America
    case 'Canada':
    case 'Greenland':
    case 'United States of America':
    case 'Bahamas':
    case 'Dominica':
    case 'Antigua':
    case 'Barbados':
    case 'Cuba':
    case 'Grenada':
    case 'Jamaica':
    case 'Nevis':
    case 'St. Lucia':
    case 'Trinidad':
    case 'Dominican Republic':
    case 'Haiti':
    case 'Belize':
    case 'Costa Rica':
    case 'El Salvador':
    case 'Gautemala':
    case 'Honduras':
    case 'Mexico':
    case 'Nicaragua':
    case 'Panama':
    case 'Argentina':
    case 'Bolivia':
    case 'Brazil':
    case 'Chile':
    case 'Colombia':
    case 'Ecuador':
    case 'Falkland Islands':
    case 'Guyana':
    case 'French Guiana':
    case 'Peru':
    case 'Paraguay':
    case 'Suriname':
    case 'Uruguay':
    case 'Venezuela':
      $barData = $region5Data;
      $barColor = $region5Color;
      $title = "Americas Scripture Distribution Goals for 2015";
      break;
  }

  //Create new chartdata object with parameters for data and color values
  $chartData = new stdClass();
  $chartData->fillColor = $barColor;
  $chartData->data = $barData;

  //Create new chart object and pass it the chartdata object as a parameter, along with title 
  $chart = new stdClass();
  $chart->data = $chartData;
  $chart->title = $title;

  echo json_encode($chart);


?>