<?php

    $result = '';

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
            $result = @include('includes/asia.inc.php');
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
            $result = @include('includes/middle-east.inc.php');
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
            $result = @include('includes/africa.inc.php');
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
            $result = @include('includes/europe.inc.php');
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
            $result = @include('includes/america.inc.php');;
          break;
      }

      echo $result;

?>