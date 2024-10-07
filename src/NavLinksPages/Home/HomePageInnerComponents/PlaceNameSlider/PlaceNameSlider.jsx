import React from 'react';
import './placenameslider.scss';

const PlaceNameSlider = () => {
    const countries = [


    "| MALANPUR INDUSTRIAL AREA | ADITYA PURAM | DD NAGAR | GULMOHAR CITY | GREEN PARK | VIVEK VIHAR | KAILASH VIHAR | BASANT VIHAR | JHANSI ROAD | GOLA KA MANDIR | MORAR CP COLONY | DB CITY TOWNSHIP | ENTIRE SHIVPURI LINK ROAD | HARISHANKAR PURAM | CHETAKPURI | MADHAV NAGAR | SHARDA VIHAR | Maharana Pratap Colony | Shriram Colony | AG Office Road | Mahal Gaon | MP Karamchari Awas Colony | Pant Nagar | Nawab Singh Colony | Kratin Enclave | Scindia Nagar | Naka Chandra Vadni | Jhansi Road | Vivekanand Needam | Anupam Nagar | Kailash Vihar | Patel Nagar | Tagor Nagar | Sardha Vihar | City Center Main Road | Sarswati Nagar | Milinium Plaza | Hargovind Puram | Balwant Nagar | Entire city center Area | Silver Estate | Abhiyank Estate | Tulsi Vihar | New Balwant Nagar | Bank Colony | Govind Vihar | Chambal Colony | Shri Ram Nagar Colony | Gaytari Vihar | Chankya Puri | Ramanuj Nagar | New Govind Puri | Bajrang Vihar Colony | Sarika Nagar | Alka Puri | Satyam Residency | Madhuvan Enclave | kailash Nagar | Elixir MK City Township | Green Garden | Orchid Green | Lotus Villa | Balaji Dham | Gardans Homes | Blue Lotus Hill | Windsor Hill | Sunvelly Township | Entire CP Colony | Aditya Nagar | Basant Nagar | Raghav Puram | Suri Nagar | Krishna Nagar | Kalpi Bridge Colony | Mahaveer Colony | Amaltas Colony | Maharajpura Industrial Area | BSF Colony | Pinto Park | Vayu Nagar | Gaytri Nagar | Badagaon Village Area Road | Ratwai Village Area | Khueriri Village Area | Banar Pura Village Area | Ganesh Pura Village Area | Kheriya Modi Village Area | Kedarpur Dham | Shitholi | Turari Village | NH - 75 | Near by of ITM University | Banmor Highway | Purani Chawani | Baraua Village Area | Near By Rairu Station | Rairu Village | Purani Chawani Road | Rairu Banmor Road | Banmor Industrial Area | Ghirongi Industrial Area | Laxmibai Colony | Padav | Seva Nagar | PhoolBagh | Saket Nagar | New Saket Nagar | Tansen Nagar | Ravi Nagar | Sai Baba Road | Prem Nagar | Dwarika Puri | Khadapati Colony | Ghandi Nagar | Vikash Nagar |"




        // 'India', 'USA', 'Brazil', 'China', 'Russia', 'Canada', 'Australia',
        // 'Germany', 'France', 'Japan', 'South Africa', 'Argentina', 'Mexico',
        // 'Italy', 'Spain', 'UK', 'Turkey', 'Saudi Arabia', 'South Korea',
        // 'Indonesia', 'Netherlands', 'Sweden', 'Switzerland', 'Norway',
        // 'New Zealand', 'Malaysia', 'Philippines', 'Thailand', 'Vietnam',
        // 'Colombia', 'Chile', 'Egypt', 'Pakistan', 'Bangladesh', 'Poland',
        // 'Ukraine', 'Israel', 'Belgium', 'Denmark', 'Finland', 'Greece',
        // 'Singapore', 'Czech Republic', 'Portugal', 'Ireland', 'Iceland',
        // 'Austria', 'Hungary', 'Romania', 'Peru', 'Venezuela'
    ];

    return (
        <div className="place-slider">
            <div className="slider-content">
                {/* Render the country list twice for continuous sliding */}
                {countries.concat(countries).map((country, index) => (
                    <span key={index} className="country-name">{country}</span>
                ))}
            </div>
        </div>
    );
};

export default PlaceNameSlider;