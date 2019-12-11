const countries = [
    {
        country: {
            name: "Afghanistan",
            cities : [
                {
                    name: "Kabul",
                    anc_name: "Chabolo",
                    region: "East"
                },
                {
                    name: "Kandahar",
                    anc_name: "Arachosia",
                    region: "South"
                },
                {
                    name: "Herat",
                    anc_name: "Haraiva",
                    region: "West"
                },
                {
                    name: "Mazar-i-Sharif",
                    anc_name: "Haraiva",
                    region: ""
                },
                {
                    name: "Kunduz",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Jalalabad",
                    anc_name: "Adinapur",
                    region: "East"
                },
                {
                    name: "Lashkar Gah",
                    anc_name: "Bost",
                    region: "South"
                },
                {
                    name: "Taluqan",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Puli Khumri",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Khost",
                    anc_name: "",
                    region: "East"
                },
                {
                    name: "Ghazni",
                    anc_name: "Ghazna",
                    region: "East"
                },
                {
                    name: "Sheberghan",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Sari Pul",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Farah",
                    anc_name: "",
                    region: "West"
                },
                {
                    name: "Balkh",
                    anc_name: "Baktra",
                    region: ""
                }
            ],
            region: "Asia",
            subregion: "Southern Asia"
        }
    },
    {
        country: {
            name: "Aaland",
            cities : [
                {
                    name: "Mariehamn",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Jomala",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Finström",
                    anc_name: "Finstrom",
                    region: ""
                },
                {
                    name: "Lemland",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Saltvik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Hammarland",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sund",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Eckerö",
                    anc_name: "Eckero",
                    region: ""
                },
                {
                    name: "Föglö",
                    anc_name: "Foglo",
                    region: ""
                },
                {
                    name: "Geta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Brändö",
                    anc_name: "Brando",
                    region: ""
                },
                {
                    name: "Vårdö",
                    anc_name: "Vardo",
                    region: ""
                },
                {
                    name: "Lumparland",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kumlinge",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kökar",
                    anc_name: "Kokar",
                    region: ""
                },
                {
                    name: "Sottunga",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Europe",
            subregion: "Northern Europe"
        }
    },
    {
        country: {
            name: "Albania",
            cities: [
                {
                    name: "Tirana",
                    anc_name: "",
                    region: "Capital"
                },
                {
                    name: "Durrës",
                    anc_name: "Durres",
                    region: ""
                },
                {
                    name: "Vlorë",
                    anc_name: "Vlore",
                    region: ""
                },
                {
                    name: "Elbasan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Shkodër",
                    anc_name: "Shkoder",
                    region: ""
                },
                {
                    name: "Fier",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kamëz",
                    anc_name: "Kamez",
                    region: ""
                },
                {
                    name: "Korçë",
                    anc_name: "Korce",
                    region: ""
                },
                {
                    name: "Berat",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lushnjë",
                    anc_name: "Lushnje",
                    region: ""
                },
                {
                    name: "Pogradec",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kavajë",
                    anc_name: "Kavaje",
                    region: ""
                },
                {
                    name: "Gjirokastër",
                    anc_name: "Gjirokaster",
                    region: ""
                },
                {
                    name: "Fushë-Krujë",
                    anc_name: "Fushe-Kruje",
                    region: ""
                },
                {
                    name: "Sarandë",
                    anc_name: "Sarande",
                    region: ""
                },
                {
                    name: "Laç",
                    anc_name: "Lac",
                    region: ""
                },
                {
                    name: "Kukës",
                    anc_name: "Kukes",
                    region: ""
                },
                {
                    name: "Sukth",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Patos",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lezhë",
                    anc_name: "Lezhe",
                    region: ""
                },
                {
                    name: "Mamurras",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Peshkopi",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kuçovë",
                    anc_name: "Kucove",
                    region: ""
                },
                {
                    name: "Krujë",
                    anc_name: "Kruje",
                    region: ""
                },
                {
                    name: "Vorë",
                    anc_name: "Vore",
                    region: ""
                },
                {
                    name: "Burrel",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Rrëshen",
                    anc_name: "Rreshen",
                    region: ""
                },
                {
                    name: "Milot",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Divjakë",
                    anc_name: "Divjake",
                    region: ""
                },
                {
                    name: "Gramsh",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bulqizë",
                    anc_name: "Bulqize",
                    region: ""
                },
                {
                    name: "Vau i Dejës",
                    anc_name: "Vau i Dejes",
                    region: ""
                },
                {
                    name: "Shëngjin",
                    anc_name: "Shengjin",
                    region: ""
                },
                {
                    name: "Klos",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ballsh",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Shijak",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ura Vajgurore",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Rrogozhinë",
                    anc_name: "Rrogozhine",
                    region: ""
                },
                {
                    name: "Librazhd",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Cërrik",
                    anc_name: "Cerrik",
                    region: ""
                },
                {
                    name: "Manëz",
                    anc_name: "Manez",
                    region: ""
                },
                {
                    name: "Peqin",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bilisht",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Krumë",
                    anc_name: "Krume",
                    region: ""
                },
                {
                    name: "Përmet",
                    anc_name: "Permet",
                    region: ""
                },
                {
                    name: "Prrenjas",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Delvinë",
                    anc_name: "Delvine",
                    region: ""
                },
                {
                    name: "Orikum",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bajram Curri",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Roskovec",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Rubik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tepelenë",
                    anc_name: "Tepelene",
                    region: ""
                },
                {
                    name: "Poliçan",
                    anc_name: "Polican",
                    region: ""
                },
                {
                    name: "Maliq",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Çorovodë",
                    anc_name: "Corovodë",
                    region: ""
                },
                {
                    name: "Ersekë",
                    anc_name: "Erseke",
                    region: ""
                },
                {
                    name: "Koplik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Pukë",
                    anc_name: "Puke",
                    region: ""
                },
                {
                    name: "Himarë",
                    anc_name: "Himare",
                    region: ""
                },
                {
                    name: "Këlcyrë",
                    anc_name: "Kelcyre",
                    region: ""
                },
                {
                    name: "Memaliaj",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Fushe-Arrez",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bajzë",
                    anc_name: "Bajze",
                    region: ""
                },
                {
                    name: "Krrabë",
                    anc_name: "Krrabe",
                    region: ""
                },
                {
                    name: "Selenicë",
                    anc_name: "Selenice",
                    region: ""
                },
                {
                    name: "Konispol",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Libohovë",
                    anc_name: "Libohove",
                    region: ""
                },
                {
                    name: "Reps",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Fierzë",
                    anc_name: "Fierze",
                    region: ""
                },
                {
                    name: "Krastë",
                    anc_name: "Kraste",
                    region: ""
                },
                {
                    name: "Leskovik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Finiq",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ulëz",
                    anc_name: "Ulez",
                    region: ""
                },
                {
                    name: "Kurbnesh",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Europe",
            subregion: "Southern Europe"
        }
    },
    {
        country: {
            name: "Algeria",
            cities: [
                {
                    name: "Algiers",
                    anc_name: "",
                    region: "North-Central"
                },
                {
                    name: "Oran",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Constantine",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Annaba",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Blida",
                    anc_name: "",
                    region: "South-West"
                },
                {
                    name: "Batna",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Djelfa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sétif",
                    anc_name: "Setif",
                    region: "East"
                },
                {
                    name: "Sidi Bel Abbès",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Biskra",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Tébessa",
                    anc_name: "Tebessa",
                    region: ""
                },
                {
                    name: "El Oued",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Skikda",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Tiaret",
                    anc_name: "",
                    region: "South-West"
                },
                {
                    name: "Béjaïa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tlemcen",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Ouargla",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Béchar",
                    anc_name: "Bechar",
                    region: ""
                },
                {
                    name: "Mostaganem",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Bordj Bou Arréridj",
                    anc_name: "Bordj Bou Arreridj",
                    region: ""
                },
                {
                    name: "Chlef",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Souk Ahras",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Médéa",
                    anc_name: "Medea",
                    region: "South"
                },
                {
                    name: "El Eulma",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Touggourt",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ghardaïa",
                    anc_name: "Ghardaia",
                    region: ""
                },
                {
                    name: "Saïda",
                    anc_name: "Saida",
                    region: ""
                },
                {
                    name: "Laghouat",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "M'Sila",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Jijel",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Relizane",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Guelma",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Aïn Béïda",
                    anc_name: "Ain Beida",
                    region: "North-East"
                },
                {
                    name: "Khenchela",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Bousaada",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Mascara",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Tindouf",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tizi Ouzou",
                    anc_name: "",
                    region: "North-Central"
                }
            ],
            region: "Africa",
            subregion: "Northern Africa"
        }
    },
    {
        country: {
            name: "American Samoa",
            cities: [
                {
                    name: "Pago Pago",
                    anc_name: "",
                    region: "Eastern District"
                },
                {
                    name: "Tāfuna",
                    anc_name: "Tafuna",
                    region: "Western District"
                },
                {
                    name: "Leone",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Faleniu",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Aūa",
                    anc_name: "Aua",
                    region: "Eastern District"
                },
                {
                    name: "Mapusagafou",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Fagatogo",
                    anc_name: "Fagatogo",
                    region: "Eastern District"
                },
                {
                    name: "Vaitogi",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Malaeimi",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Vailoatai",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Aoloau",
                    anc_name: "",
                    region: "Western District"
                }
            ],
            region: "Oceania",
            subregion: "Polynesia"
        }
    },
    {
        country: {
            name: "Andorra",
            cities: [
                {
                    name: "Andorra la Vella",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Escaldes-Engordany",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Encamp",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sant Julià de Lòria",
                    anc_name: "Sant Julia de Loria",
                    region: ""
                },
                {
                    name: "La Massana",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Santa Coloma",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ordino",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "El Pas de la Casa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Canillo",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Arinsal",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Europe",
            subregion: "Southern Europe"
        }
    },
    {
        country: {
            name: "Angola",
            cities: [
                {
                    name: "Luanda",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Huambo",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lobito",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lubango",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kuito",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Malanje",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Benguela",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lucapa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Namibe",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Soyo",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Africa",
            subregion: "Central Africa"
        }
    },
    {
        country: {
            name: "Anguilla",
            cities: [
                {
                    name: "The Valley",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Blowing Point Village",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sandy Ground Village",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "Caribbean"
        }
    },
    {
        country: {
            name: "Antigua and Barbuda",
            cities: [
                {
                    name: "Saint John's",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "All Saints",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Liberta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Potter's Village",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bolans",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Swetes",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Seaview Farm",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Pigotts",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Codrington",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Parham",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "Caribbean"
        }
    },
    {
        country: {
            name: "Argentina",
            cities: [
                {
                    name: "Buenos Aires",
                    anc_name: "",
                    region: "West"
                },
                {
                    name: "Córdoba",
                    anc_name: "Cordoba",
                    region: ""
                },
                {
                    name: "Rosario",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Mendoza",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "La Plata",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tucumán",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Mar del Plata",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Salta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Santa Fe",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "San Juan",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "South America"
        }
    },
    {
        country: {
            name: "Armenia",
            cities: [
                {
                    name: "Yerevan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Gyumri",
                    anc_name: "",
                    region: "North West"
                },
                {
                    name: "Vanadzor",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Vagharshapat",
                    anc_name: "Etchmiadzin",
                    region: ""
                },
                {
                    name: "Abovyan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kapan",
                    anc_name: "",
                    region: "South East"
                },
                {
                    name: "Hrazdan",
                    anc_name: "",
                    region: "South East"
                },
                {
                    name: "Armavir",
                    anc_name: "",
                    region: "West"
                },
                {
                    name: "Ijevan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Gavar",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Goris",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Charentsavan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ararat",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Masis",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Artik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sevan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ashtarak",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Dilijan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sisian",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Alaverdi",
                    anc_name: "",
                    region: "North East"
                },
                {
                    name: "Stepanavan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Martuni",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Spitak",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Vardenis",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Yeghvard",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Vedi",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Byureghavan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Nor Hachn",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Metsamor",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Berd",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Yeghegnadzor",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Tashir",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Kajaran",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Aparan",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Vayk",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Chambarak",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Maralik",
                    anc_name: "",
                    region: "North West"
                },
                {
                    name: "Noyemberyan",
                    anc_name: "",
                    region: "North East"
                },
                {
                    name: "Talin",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Jermuk",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Meghri",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Ayrum",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Akhtala",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tumanyan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tsaghkadzor",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Asia",
            subregion: "Western Asia"
        }
    },
    {
        country: {
            name: "Aruba",
            cities: [
                {
                    name: "Brasil",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bubali",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ceru Colorado",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Cura Cabai",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Malmok",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Madiki",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Noord",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Oranjestad",
                    anc_name: "",
                    region: "South East"
                },
                {
                    name: "Piedra Plat",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ponton",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Pos Chikitu",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "San Nicolas",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Santa Cruz",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Savaneta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Wayaca",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "Caribbean"
        }
    },
    {
        country: {
            name: "Australia",
            cities: [
                {
                    name: "Sydney",
                    anc_name: "",
                    region: "New South Wales"
                },
                {
                    name: "Melbourne",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Oceania",
            subregion: "Australia and New Zealand"
        }
    },
    {
      country: {
        name: "Austria",
        cities: [
          {
            name: "Vienna",
            anc_name: "",
            region: ""
          },
          {
            name: "Salzburg",
            anc_name: "",
            region: ""
          },
          {
            name: "Innsbruck",
            anc_name: "",
            region: ""
          },
          {
            name: "Hallstatt",
            anc_name: "",
            region: ""
          },
          {
            name: "Linz",
            anc_name: "",
            region: ""
          },
          {
            name: "Graz",
            anc_name: "",
            region: ""
          },
          {
            name: "Klagenfurt",
            anc_name: "",
            region: ""
          },
          {
            name: "Villach",
            anc_name: "",
            region: ""
          },
          {
            name: "Wels",
            anc_name: "",
            region: ""
          },
          {
            name: "Dornbirn",
            anc_name: "",
            region: ""
          },
          {
            name: "Steyr",
            anc_name: "",
            region: ""
          },
        ],
        region: "Europe",
        subregion: "Western Europe"
      }
    },
    {
      country: {
        name: "Azerbaijan",
        cities: [
          {
            name: "Agjabadi",
            anc_name: "",
            region: ""
          },
          {
            name: "Baku",
            anc_name: "",
            region: ""
          },
          {
            name: "Sumqayit",
            anc_name: "",
            region: ""
          },
          {
            name: "Ganja",
            anc_name: "",
            region: ""
          },
          {
            name: "Lankaran",
            anc_name: "",
            region: ""
          },
          {
            name: "Mingachevir",
            anc_name: "",
            region: ""
          },
          {
            name: "Nakhchivan",
            anc_name: "",
            region: ""
          },
          {
            name: "Shirvan",
            anc_name: "",
            region: ""
          },
          {
            name: "Shaki",
            anc_name: "",
            region: ""
          },
        ],
        region: "Asia",
        subregion: "Western Asia",
      }
    },
    {
      country:{
        name: "Bahamas",
        cities: [
          {
            name: "Nassau",
            anc_name: "",
            region: ""
          },
          {
            name: "Freeport",
            anc_name: "",
            region: ""
          },
          {
            name: "West End",
            anc_name: "",
            region: ""
          },
          {
            name: "Coopers Town",
            anc_name: "",
            region: ""
          },
          {
            name: "Marsh Harbour",
            anc_name: "",
            region: ""
          },
          {
            name: "Bahamas City",
            anc_name: "",
            region: ""
          },
          {
            name: "Arthur's Town",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
    {
      country:{
        name: "Bahrain",
        cities: [
          {
            name: "Manama",
            anc_name: "",
            region: ""
          },
          {
            name: "Riffa",
            anc_name: "",
            region: ""
          },
          {
            name: "Muharraq",
            anc_name: "",
            region: ""
          },
          {
            name: "Hamad Town",
            anc_name: "",
            region: ""
          },
          {
            name: "A'ali",
            anc_name: "",
            region: ""
          },
          {
            name: "Isa Town",
            anc_name: "",
            region: ""
          },
          {
            name: "Sitra",
            anc_name: "",
            region: ""
          },
          {
            name: "Budaiya",
            anc_name: "",
            region: ""
          },
        ],
        region: "Asia",
        subregion: "Western Asia",
      }
    },
    {
      country:{
        name: "Bangladesh",
        cities: [
          {
            name: "Dhaka",
            anc_name: "",
            region: ""
          },
          {
            name: "Chittagong",
            anc_name: "",
            region: ""
          },
          {
            name: "Rajshahi",
            anc_name: "",
            region: ""
          },
          {
            name: "Khulna",
            anc_name: "",
            region: ""
          },
          {
            name: "Sylhet",
            anc_name: "",
            region: ""
          },
          {
            name: "Mymensingh",
            anc_name: "",
            region: ""
          },
          {
            name: "Barisal",
            anc_name: "",
            region: ""
          },
          {
            name: "Rangpur",
            anc_name: "",
            region: ""
          },
          {
            name: "Comilla",
            anc_name: "",
            region: ""
          },
          {
            name: "Narayanganj",
            anc_name: "",
            region: ""
          },
          {
            name: "Gazipur",
            anc_name: "",
            region: ""
          },
        ],
        region: "Asia",
        subregion: "Southern Asia",
      }
    },
    {
      country:{
        name: "Barbados",
        cities: [
          {
            name: "Bridgetown",
            anc_name: "",
            region: ""
          },
          {
            name: "Speightstown",
            anc_name: "",
            region: ""
          },
          {
            name: "Oistins",
            anc_name: "",
            region: ""
          },
          {
            name: "Bathsheba",
            anc_name: "",
            region: ""
          },
          {
            name: "Holetown",
            anc_name: "",
            region: ""
          },
          {
            name: "The Crane",
            anc_name: "",
            region: ""
          },
          {
            name: "Crab Hill",
            anc_name: "",
            region: ""
          },
          {
            name: "Greenland",
            anc_name: "",
            region: ""
          },
          {
            name: "Blackmans",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
    {
      country:{
        name: "Belarus",
        cities: [
          {
            name: "Minsk",
            anc_name: "",
            region: "Minsk region"
          },
          {
            name: "Barysaw",
            anc_name: "",
            region: "Minsk region"
          },
          {
            name: "Salihorsk",
            anc_name: "",
            region: "Minsk region"
          },
          {
            name: "Vitebsk",
            anc_name: "",
            region: "Vitebsk region"
          },
          {
            name: "Orsha",
            anc_name: "",
            region: "Vitebsk region"
          },
          {
            name: "Mogilev",
            anc_name: "",
            region: "Mogilev region"
          },
          {
            name: "Babruysk",
            anc_name: "",
            region: "Mogilev region"
          },
          {
            name: "Horki",
            anc_name: "",
            region: "Mogilev region"
          },
        ],
        region: "Europe",
        subregion: "Eastern Europe",
      }
    },
    {
      country:{
        name: "Belgium",
        cities: [
          {
            name: "Bruges",
            anc_name: "",
            region: "Flemish Region"
          },
          {
            name: "Brussels",
            anc_name: "",
            region: "Brussels-Capital Region"
          },
          {
            name: "Antwerp",
            anc_name: "",
            region: "Flemish Region"
          },
          {
            name: "	Ghent",
            anc_name: "",
            region: "Flemish Region"
          },
          {
            name: "	Charleroi",
            anc_name: "",
            region: "Wallonia"
          },
          {
            name: "Schaerbeek",
            anc_name: "",
            region: "Brussels-Capital Region"
          },
          {
            name: "Namur ",
            anc_name: "",
            region: "Wallonia"
          },
          {
            name: "	Mons",
            anc_name: "",
            region: "Wallonia"
          },
          {
            name: "Sint-Jans-Molenbeek",
            anc_name: "",
            region: "Brussels-Capital Region"
          },
        ],
        region: "Europe",
        subregion: "Western Europe",
      }
    },
    {
      country:{
        name: "Belize",
        cities: [
          {
            name: "Belize City ",
            anc_name: "",
            region: ""
          },
          {
            name: "Belmopan",
            anc_name: "",
            region: ""
          },
          {
            name: "Orange Walk Town",
            anc_name: "",
            region: ""
          },
          {
            name: "San Pedro",
            anc_name: "",
            region: ""
          },
          {
            name: "San Ignacio",
            anc_name: "",
            region: ""
          },
          {
            name: "Dangriga",
            anc_name: "",
            region: ""
          },
          {
            name: "Punta Gorda",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Central America",
      }
    },
    {
      country:{
        name: "Benin",
        cities: [
          {
            name: "Cotonou",
            anc_name: "",
            region: ""
          },
          {
            name: "Porto-Novo",
            anc_name: "",
            region: ""
          },
          {
            name: "Parakou ",
            anc_name: "",
            region: ""
          },
          {
            name: "Djougou ",
            anc_name: "",
            region: ""
          },
          {
            name: "Bohicon",
            anc_name: "",
            region: ""
          },
          {
            name: "Kandi ",
            anc_name: "",
            region: ""
          },
          {
            name: "Abomey ",
            anc_name: "",
            region: ""
          },
          {
            name: "Natitingou ",
            anc_name: "",
            region: ""
          },
          {
            name: "Lokossa",
            anc_name: "",
            region: ""
          },
          {
            name: "Ouidah",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Western Africa",
      }
    },
    {
      country:{
        name: "Bermuda",
        cities: [
          {
            name: "Saint George",
            anc_name: "",
            region: ""
          },
          {
            name: "Hamilton",
            anc_name: "",
            region: ""
          },
          {
            name: "Stovel Bay",
            anc_name: "",
            region: ""
          },
          {
            name: "Cross Bay",
            anc_name: "",
            region: ""
          }
        ],
        region: "Americas",
        subregion: "Northern America",
      }
    },
    {
      country:{
        name: "Bhutan",
        cities: [
          {
            name: "Thimphu",
            anc_name: "",
            region: ""
          },
          {
            name: "Phuntsholing",
            anc_name: "",
            region: ""
          },
          {
            name: "Paro",
            anc_name: "",
            region: ""
          },
          {
            name: "Gelephu",
            anc_name: "",
            region: ""
          },
          {
            name: "Samdrup Jongkhar",
            anc_name: "",
            region: ""
          },
          {
            name: "Wangdue Phodrang",
            anc_name: "",
            region: ""
          },
          {
            name: "Punakha",
            anc_name: "",
            region: ""
          },
          {
            name: "Jakar",
            anc_name: "",
            region: ""
          },
          {
            name: "Nganglam",
            anc_name: "",
            region: ""
          },
          {
            name: "Samtse",
            anc_name: "",
            region: ""
          },
        ],
        region: "Asia",
        subregion: "Southern Asia",
      }
    },
    {
      country:{
        name: "Bolivia (Plurinational State of)",
        cities: [
          {
            name: "Santa Cruz de la Sierra",
            anc_name: "",
            region: ""
          },
          {
            name: "El Alto",
            anc_name: "",
            region: ""
          },
          {
            name: "La Paz",
            anc_name: "",
            region: ""
          },
          {
            name: "Cochabamba",
            anc_name: "",
            region: ""
          },
          {
            name: "Oruro",
            anc_name: "",
            region: ""
          },
          {
            name: "Sucre",
            anc_name: "",
            region: ""
          },
          {
            name: "Tarija",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "South America",
      }
    },
    {
      country:{
        name: "Bonaire, Sint Eustatius and Saba",
        cities: [
          {
            name: "Kralendijk",
            anc_name: "",
            region: ""
          },
          {
            name: "Oranjestad",
            anc_name: "",
            region: ""
          },
          {
            name: "Antriol",
            anc_name: "",
            region: ""
          },
          {
            name: "The Bottom",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
    {
      country:{
        name: "Bosnia and Herzegovina",
        cities: [
          {
            name: "Sarajevo",
            anc_name: "",
            region: ""
          },
          {
            name: "Banja Luka",
            anc_name: "",
            region: ""
          },
          {
            name: "Tuzla",
            anc_name: "",
            region: ""
          },
          {
            name: "Zenica",
            anc_name: "",
            region: ""
          },
          {
            name: "Bijeljina",
            anc_name: "",
            region: ""
          },
          {
            name: "Mostar",
            anc_name: "",
            region: ""
          },
          {
            name: "Prijedor",
            anc_name: "",
            region: ""
          },
          {
            name: "Brčko",
            anc_name: "",
            region: ""
          },
          {
            name: "Doboj",
            anc_name: "",
            region: ""
          },
          {
            name: "Cazin",
            anc_name: "",
            region: ""
          },
          {
            name: "Zvornik",
            anc_name: "",
            region: ""
          },
        ],
        region: "Europe",
        subregion: "Southern Europe",
      }
    },
    {
      country:{
        name: "Botswana",
        cities: [
          {
            name: "Gaborone",
            anc_name: "",
            region: ""
          },
          {
            name: "Francistown",
            anc_name: "",
            region: ""
          },
          {
            name: "Molepolole",
            anc_name: "",
            region: ""
          },
          {
            name: "Selibe Phikwe",
            anc_name: "",
            region: ""
          },
          {
            name: "Mahalapye",
            anc_name: "",
            region: ""
          },
          {
            name: "Mogoditshane",
            anc_name: "",
            region: ""
          },
          {
            name: "Lobatse",
            anc_name: "",
            region: ""
          },
          {
            name: "Maun",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Southern Africa",
      }
    },
    {
      country:{
        name: "Bouvet Island",
        cities: [
        ],
        region: "",
        subregion: "",
      }
    },
    {
      country:{
        name: "Brazil",
        cities: [
          {
            name: "São Paulo",
            anc_name: "",
            region: ""
          },
          {
            name: "Rio de Janeiro",
            anc_name: "",
            region: ""
          },
          {
            name: "Brasília",
            anc_name: "",
            region: ""
          },
          {
            name: "Salvador",
            anc_name: "",
            region: ""
          },
          {
            name: "Fortaleza",
            anc_name: "",
            region: ""
          },
          {
            name: "Belo Horizonte",
            anc_name: "",
            region: ""
          },
          {
            name: "Manaus",
            anc_name: "",
            region: ""
          },
          {
            name: "Curitiba",
            anc_name: "",
            region: ""
          },
          {
            name: "Recife",
            anc_name: "",
            region: ""
          },
          {
            name: "Goiânia",
            anc_name: "",
            region: ""
          },
          {
            name: "Belém",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "South America",
      }
    },
    {
      country: {
        name: "British Indian Ocean Territory",
        cities: [
          {
            name: "Diego Garcia",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Eastern Africa",
      }
    },
    {
      country:{
        name: "United States Minor Outlying Islands",
        cities: [
          {
            name: "Middlebrook Islands",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Northern America",
      }
    },
    {
      country:{
        name: "Virgin Islands (British)",
        cities: [
          {
            name: "Road Town",
            anc_name: "",
            region: ""
          }
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
    {
      country:{
        name: "Virgin Islands (U.S.)",
        cities: [
          {
            name: "Charlotte Amalie",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
    {
      country:{
        name: "Brunei Darussalam",
        cities: [
          {
            name: "Bandar Seri Begawan",
            anc_name: "",
            region: ""
          },
          {
            name: "Kuala Belait",
            anc_name: "",
            region: ""
          },
          {
            name: "Seria",
            anc_name: "",
            region: ""
          },
          {
            name: "Tutong",
            anc_name: "",
            region: ""
          },
        ],
        region: "Asia",
        subregion: "South-Eastern Asia",
      }
    },
    {
      country:{
        name: "Bulgaria",
        cities: [
          {
            name: "Sofia",
            anc_name: "",
            region: ""
          },
          {
            name: "Plovdiv",
            anc_name: "",
            region: ""
          },
          {
            name: "Varna",
            anc_name: "",
            region: ""
          },
          {
            name: "Burgas",
            anc_name: "",
            region: ""
          },
          {
            name: "Ruse",
            anc_name: "",
            region: ""
          },
          {
            name: "Stara Zagora",
            anc_name: "",
            region: ""
          },
          {
            name: "Pleven",
            anc_name: "",
            region: ""
          },
          {
            name: "Sliven",
            anc_name: "",
            region: ""
          },
          {
            name: "Dobrich",
            anc_name: "",
            region: ""
          },
          {
            name: "Shumen",
            anc_name: "",
            region: ""
          },
          {
            name: "Pernik",
            anc_name: "",
            region: ""
          },
        ],
        region: "Europe",
        subregion: "Eastern Europe",
      }
    },
    {
      country:{
        name: "Burkina Faso",
        cities: [
          {
            name: "Ouagadougou",
            anc_name: "",
            region: ""
          },
          {
            name: "Bobo Dioulasso",
            anc_name: "",
            region: ""
          },
          {
            name: "Banfora",
            anc_name: "",
            region: ""
          },
          {
            name: "Koudougou",
            anc_name: "",
            region: ""
          },
          {
            name: "Ouahigouya",
            anc_name: "",
            region: ""
          },
          {
            name: "Kaya",
            anc_name: "",
            region: ""
          },
          {
            name: "Fada N'gourma",
            anc_name: "",
            region: ""
          },
          {
            name: "Tenkodogo",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Western Africa",
      }
    },
    {
      country:{
        name: "Burundi",
        cities: [
          {
            name: "Bujumbura",
            anc_name: "",
            region: ""
          },
          {
            name: "Gitega",
            anc_name: "",
            region: ""
          },
          {
            name: "Muyinga",
            anc_name: "",
            region: ""
          },
          {
            name: "Ngozi",
            anc_name: "",
            region: ""
          },
          {
            name: "	Ruyigi",
            anc_name: "",
            region: ""
          },
          {
            name: "	Kayanza",
            anc_name: "",
            region: ""
          },
          {
            name: "	Bururi",
            anc_name: "",
            region: ""
          },
          {
            name: "	Rutana",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Eastern Africa",
      }
    },
    {
      country:{
        name: "Cambodia",
        cities: [
          {
            name: "Poipet",
            anc_name: "",
            region: ""
          },
          {
            name: "Kampong Cham",
            anc_name: "",
            region: ""
          },
          {
            name: "Kep",
            anc_name: "",
            region: ""
          },
          {
            name: "Kampong Thom",
            anc_name: "",
            region: ""
          },
          {
            name: "Koh Kong",
            anc_name: "",
            region: ""
          },
          {
            name: "Koh Kong",
            anc_name: "",
            region: ""
          },
          {
            name: "Kampot",
            anc_name: "",
            region: ""
          },
          {
            name: "Kratie",
            anc_name: "",
            region: ""
          },
          {
            name: "Battambang",
            anc_name: "",
            region: ""
          },
          {
            name: "Sihanoukville",
            anc_name: "",
            region: ""
          },
          {
            name: "Siem Reap",
            anc_name: "",
            region: ""
          },
          {
            name: "Phnom Penh",
            anc_name: "",
            region: ""
          },

        ],
        region: "Asia",
        subregion: "South-Eastern Asia",
      }
    },
    {
      country:{
        name: "Cameroon",
        cities: [
          {
            name: "Douala",
            anc_name: "",
            region: ""
          },
          {
            name: "Yaoundé",
            anc_name: "",
            region: ""
          },
          {
            name: "Bamenda",
            anc_name: "",
            region: ""
          },
          {
            name: "Bafoussam",
            anc_name: "",
            region: ""
          },
          {
            name: "Garoua",
            anc_name: "",
            region: ""
          },
          {
            name: "Maroua",
            anc_name: "",
            region: ""
          },
          {
            name: "Ngaoundéré",
            anc_name: "",
            region: ""
          },
          {
            name: "Kumba",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Middle Africa",
      }
    },
    {
      country:{
        name: "Canada",
        cities: [
          {
            name: "Toronto",
            anc_name: "",
            region: ""
          },
          {
            name: "Vancouver",
            anc_name: "",
            region: ""
          },
          {
            name: "Montreal",
            anc_name: "",
            region: ""
          },
          {
            name: "Niagara Falls",
            anc_name: "",
            region: ""
          },
          {
            name: "Victoria",
            anc_name: "",
            region: ""
          },
          {
            name: "Halifax",
            anc_name: "",
            region: ""
          },
          {
            name: "Quebec City",
            anc_name: "",
            region: ""
          },
          {
            name: "Calgary",
            anc_name: "",
            region: ""
          },
          {
            name: "Ottawa",
            anc_name: "",
            region: ""
          },
          {
            name: "Edmonton",
            anc_name: "",
            region: ""
          },
          {
            name: "Mississauga",
            anc_name: "",
            region: ""
          },
          {
            name: "Winnipeg",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Northern America",
      }
    },
    {
      country:{
        name: "Cabo Verde",
        cities: [
          {
            name: "Praia",
            anc_name: "",
            region: ""
          },
          {
            name: "Mindelo",
            anc_name: "",
            region: ""
          },
          {
            name: "Espargos",
            anc_name: "",
            region: ""
          },
          {
            name: "Assomada",
            anc_name: "",
            region: ""
          },
          {
            name: "Pedra Badejo",
            anc_name: "",
            region: ""
          },
          {
            name: "Porto Novo",
            anc_name: "",
            region: ""
          },
          {
            name: "São Filipe",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Western Africa",
      }
    },
    {
      country:{
        name: "Cayman Islands",
        cities: [
          {
            name: "George Town",
            anc_name: "",
            region: ""
          },
          {
            name: "West Bay",
            anc_name: "",
            region: ""
          },
          {
            name: "Bodden Town",
            anc_name: "",
            region: ""
          },
          {
            name: "East End",
            anc_name: "",
            region: ""
          },
          {
            name: "North Side",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
    {
      country:{
        name: "Central African Republic",
        cities: [
          {
            name: "Bangui",
            anc_name: "",
            region: ""
          },
          {
            name: "Bimbo",
            anc_name: "",
            region: ""
          },
          {
            name: "Berbérati",
            anc_name: "",
            region: ""
          },
          {
            name: "Carnot ",
            anc_name: "",
            region: ""
          },
          {
            name: "Bambari",
            anc_name: "",
            region: ""
          },
          {
            name: "Bouar",
            anc_name: "",
            region: ""
          },
          {
            name: "Bossangoa",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Middle Africa",
      }
    },
    {
      country:{
        name: "Chad",
        cities: [
          {
            name: "N'Djamena",
            anc_name: "",
            region: ""
          },
          {
            name: "Moundou",
            anc_name: "",
            region: ""
          },
          {
            name: "Sarh",
            anc_name: "",
            region: ""
          },
          {
            name: "Abéché",
            anc_name: "",
            region: ""
          },
          {
            name: "Kelo",
            anc_name: "",
            region: ""
          },
          {
            name: "Koumra",
            anc_name: "",
            region: ""
          },
          {
            name: "Pala",
            anc_name: "",
            region: ""
          },
          {
            name: "Am Timan",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Middle Africa",
      }
    },
    {
      country:{
        name: "Chile",
        cities: [
          {
            name: "Arica",
            anc_name: "",
            region: "Arica and Parinacota Region"
          },
          {
            name: "Iquique",
            anc_name: "",
            region: "Tarapacá"
          },
          {
            name: "Alto Hospicio",
            anc_name: "",
            region: "Tarapacá"
          },
          {
            name: "Pozo Almonte",
            anc_name: "",
            region: "Tarapacá"
          },
          {
            name: "Antofagasta",
            anc_name: "",
            region: "Antofagasta"
          },
          {
            name: "Calama",
            anc_name: "",
            region: ""
          },
          {
            name: "Tocopilla",
            anc_name: "",
            region: "Antofagasta"
          },
          {
            name: "Chuquicamata",
            anc_name: "",
            region: "Antofagasta"
          },
          {
            name: "Taltal",
            anc_name: "",
            region: "Antofagasta"
          },
        ],
        region: "Americas",
        subregion: "South America",
      }
    },
    {
      country:{
        name: "China",
        cities: [
          {
            name: "Shanghai",
            anc_name: "",
            region: ""
          },
          {
            name: "Guangzhou",
            anc_name: "",
            region: ""
          },
          {
            name: "	Shenzhen",
            anc_name: "",
            region: ""
          },
          {
            name: "Tianjin",
            anc_name: "",
            region: ""
          },
          {
            name: "Wuhan",
            anc_name: "",
            region: ""
          },
          {
            name: "Dongguan",
            anc_name: "",
            region: ""
          },
          {
            name: "Chengdu",
            anc_name: "",
            region: ""
          },
          {
            name: "Foshan",
            anc_name: "",
            region: ""
          },
          {
            name: "Chongqing",
            anc_name: "",
            region: ""
          },
          {
            name: "Nanjing",
            anc_name: "",
            region: ""
          },
          {
            name: "Shenyang",
            anc_name: "",
            region: ""
          },
          {
            name: "Hangzhou",
            anc_name: "",
            region: ""
          },
          {
            name: "Xi'an",
            anc_name: "",
            region: ""
          },
          {
            name: "Harbin",
            anc_name: "",
            region: ""
          },
          {
            name: "Suzhou",
            anc_name: "",
            region: ""
          },
          {
            name: "Qingdao",
            anc_name: "",
            region: ""
          },
          {
            name: "Dalian",
            anc_name: "",
            region: ""
          },
          {
            name: "Zhengzhou",
            anc_name: "",
            region: ""
          },
          {
            name: "Shantou",
            anc_name: "",
            region: ""
          },
          {
            name: "Jinan",
            anc_name: "",
            region: ""
          },
          {
            name: "Changchun",
            anc_name: "",
            region: ""
          },
          {
            name: "Kunming",
            anc_name: "",
            region: ""
          },
          {
            name: "Changsha",
            anc_name: "",
            region: ""
          },
          {
            name: "Taiyuan",
            anc_name: "",
            region: ""
          },
          {
            name: "Xiamen",
            anc_name: "",
            region: ""
          },
          {
            name: "	Hefei",
            anc_name: "",
            region: ""
          },
          {
            name: "Shijiazhuang",
            anc_name: "",
            region: ""
          },
          {
            name: "	Ürümqi",
            anc_name: "",
            region: ""
          },
          {
            name: "	Fuzhou",
            anc_name: "",
            region: ""
          },
          {
            name: "Wuxi",
            anc_name: "",
            region: ""
          },
        ],
        region: "Asia",
        subregion: "Eastern Asia",
      }
    },
    {
      country:{
        name: "Christmas Island",
        cities: [
          {
            name: "Flying Fish Cove",
            anc_name: "",
            region: ""
          },
        ],
        region: "Oceania",
        subregion: "Australia and New Zealand",
      }
    },
    {
      country:{
        name: "Cocos (Keeling) Islands",
        cities: [
          {
            name: "",
            anc_name: "",
            region: ""
          },
        ],
        region: "Oceania",
        subregion: "Australia and New Zealand",
      }
    },
    {
      country:{
        name: "Colombia",
        cities: [
          {
            name: "Bogotá",
            anc_name: "",
            region: ""
          },
          {
            name: "Medellín",
            anc_name: "",
            region: ""
          },
          {
            name: "Cali",
            anc_name: "",
            region: ""
          },
          {
            name: "Barranquilla",
            anc_name: "",
            region: ""
          },
          {
            name: "Cartagena",
            anc_name: "",
            region: ""
          },
          {
            name: "Cúcuta",
            anc_name: "",
            region: ""
          },
          {
            name: "Soledad",
            anc_name: "",
            region: ""
          },
          {
            name: "Ibagué",
            anc_name: "",
            region: ""
          },
          {
            name: "Armenia",
            anc_name: "",
            region: ""
          },
          {
            name: "Santa Marta",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "South America",
      }
    },
    {
      country:{
        name: "Comoros",
        cities: [
          {
            name: "Moroni ",
            anc_name: "",
            region: ""
          },
          {
            name: " Moutsamoudou ",
            anc_name: "",
            region: ""
          },
          {
            name: "Fomboni ",
            anc_name: "",
            region: ""
          },
          {
            name: "	Domoni ",
            anc_name: "",
            region: ""
          },
          {
            name: " Tsimbeo",
            anc_name: "",
            region: ""
          },
          {
            name: "Adda-Douéni",
            anc_name: "",
            region: ""
          },
          {
            name: "Sima",
            anc_name: "",
            region: ""
          },
          {
            name: "Bambao",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Eastern Africa",
      }
    },
    {
      country:{
        name: "Congo",
        cities: [
          {
            name: "Kinshasa",
            anc_name: "",
            region: ""
          },
          {
            name: "Lubumbashi",
            anc_name: "",
            region: ""
          },
          {
            name: "Mbuji-Mayi",
            anc_name: "Bakwanga",
            region: ""
          },
          {
            name: "Bukavu",
            anc_name: "",
            region: ""
          },
          {
            name: "Kananga",
            anc_name: "",
            region: ""
          },
          {
            name: "Kisangani",
            anc_name: "",
            region: ""
          },
          {
            name: "Tshikapa",
            anc_name: "",
            region: ""
          },
          {
            name: "Kolwezi",
            anc_name: "",
            region: ""
          },
          {
            name: "Likasi",
            anc_name: "",
            region: ""
          },
          {
            name: "Goma",
            anc_name: "",
            region: ""
          },
          {
            name: "Kikwit",
            anc_name: "",
            region: ""
          },
          {
            name: "Uvira",
            anc_name: "",
            region: ""
          },
          {
            name: "Bunia",
            anc_name: "",
            region: ""
          },
        ],
        region: "Africa",
        subregion: "Middle Africa",
      }
    },
    {
      country:{
        name: "Cook Islands",
        cities: [
          {
            name: "Avarua",
            anc_name: "",
            region: ""
          },
        ],
        region: "Oceania",
        subregion: "Polynesia",
      }
    },
    {
      country:{
        name: "Costa Rica",
        cities: [
          {
            name: "San José",
            anc_name: "",
            region: ""
          },
          {
            name: "Limón ",
            anc_name: "",
            region: ""
          },
          {
            name: "Alajuela",
            anc_name: "",
            region: ""
          },
          {
            name: "San Francisco",
            anc_name: "",
            region: ""
          },
          {
            name: "Desamparados",
            anc_name: "",
            region: ""
          },
          {
            name: "Liberia",
            anc_name: "",
            region: ""
          },
          {
            name: "Puntarenas",
            anc_name: "",
            region: ""
          },
          {
            name: "San Vicente",
            anc_name: "",
            region: ""
          },
          {
            name: "Curridabat",
            anc_name: "",
            region: ""
          },
          {
            name: "Paraíso",
            anc_name: "",
            region: ""
          },
          {
            name: "San Isidro de El General",
            anc_name: "",
            region: ""
          },
          {
            name: "San José de Alajuela",
            anc_name: "",
            region: ""
          },
          {
            name: "Ipís",
            anc_name: "",
            region: ""
          },
          {
            name: "San Miguel",
            anc_name: "",
            region: ""
          },
          {
            name: "Turrialba",
            anc_name: "",
            region: ""
          },
          {
            name: "Cartago",
            anc_name: "",
            region: ""
          },
          {
            name: "Guadalupe",
            anc_name: "",
            region: ""
          },
          {
            name: "Quesada",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Central America",
      }
    },
    {
      country:{
        name: "Croatia",
        cities: [
          {
            name: "Karlovac",
            anc_name: "",
            region: ""
          },
          {
            name: "Slavonski Brod",
            anc_name: "",
            region: ""
          },
          {
            name: "Sibenik",
            anc_name: "",
            region: ""
          },
          {
            name: "Varazdin",
            anc_name: "",
            region: ""
          },
          {
            name: "Rijeka",
            anc_name: "",
            region: ""
          },
          {
            name: "Sisak",
            anc_name: "",
            region: ""
          },
          {
            name: "Osijek",
            anc_name: "",
            region: ""
          },
          {
            name: "Pula",
            anc_name: "",
            region: ""
          },
          {
            name: " Zagreb",
            anc_name: "",
            region: ""
          },
          {
            name: "Zadar",
            anc_name: "",
            region: ""
          },
          {
            name: "Split",
            anc_name: "",
            region: ""
          },
          {
            name: "Dubrovnik",
            anc_name: "",
            region: ""
          },
          {
            name: "Velika Gorica",
            anc_name: "",
            region: ""
          },
          {
            name: "Kaštela",
            anc_name: "",
            region: ""
          },
          {
            name: "Samobor",
            anc_name: "",
            region: ""
          },
          {
            name: "Vinkovci",
            anc_name: "",
            region: ""
          },
          {
            name: "Koprivnica",
            anc_name: "",
            region: ""
          },
          {
            name: "Đakovo",
            anc_name: "",
            region: ""
          },
          {
            name: "Vukovar",
            anc_name: "",
            region: ""
          },
          {
            name: "Čakovec",
            anc_name: "",
            region: ""
          },
          {
            name: "Požega",
            anc_name: "",
            region: ""
          },
          {
            name: "Zaprešić",
            anc_name: "",
            region: ""
          },
        ],
        region: "Europe",
        subregion: "Southern Europe",
      }
    },
    {
      country:{
        name: "Cuba",
        cities: [
          {
            name: "Havana",
            anc_name: "",
            region: ""
          },
          {
            name: "Santiago de Cuba",
            anc_name: "",
            region: ""
          },
          {
            name: "Camagüey",
            anc_name: "",
            region: ""
          },
          {
            name: "Holguín",
            anc_name: "",
            region: ""
          },
          {
            name: "Guantánamo",
            anc_name: "",
            region: ""
          },
          {
            name: "Santa Clara",
            anc_name: "",
            region: ""
          },
          {
            name: "Las Tunas",
            anc_name: "",
            region: ""
          },
          {
            name: "Bayamo",
            anc_name: "",
            region: ""
          },
          {
            name: "Cienfuegos",
            anc_name: "",
            region: ""
          },
          {
            name: "	Pinar del Río",
            anc_name: "",
            region: ""
          },
          {
            name: "Matanzas",
            anc_name: "",
            region: ""
          },
          {
            name: "Ciego de Ávila",
            anc_name: "",
            region: ""
          },
          {
            name: "Sancti Spíritus",
            anc_name: "",
            region: ""
          },
          {
            name: "Manzanillo",
            anc_name: "",
            region: ""
          },
          {
            name: "	Cárdenas",
            anc_name: "",
            region: ""
          },
          {
            name: "	Palma Soriano",
            anc_name: "",
            region: ""
          },
          {
            name: "Moa",
            anc_name: "",
            region: ""
          },
          {
            name: "	Florida",
            anc_name: "",
            region: ""
          },
          {
            name: "Morón",
            anc_name: "",
            region: ""
          },
          {
            name: "Nueva Gerona",
            anc_name: "",
            region: ""
          },
          {
            name: "Contramaestre",
            anc_name: "",
            region: ""
          },
          {
            name: "Colón",
            anc_name: "",
            region: ""
          },
        ],
        region: "Americas",
        subregion: "Caribbean",
      }
    },
]

module.exports = countries
