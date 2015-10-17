<?PHP
$source = array(
	'Use the Source, Luke',
	'The Source will be with you, always',
	'The Source is strong with this one',
	'May the Source be with you'
);
$random = rand(0, (count($source)-1));
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>jQuery Vector Maps - Resizable Scalable Vector Graphic (SVG) Maps for Modern Browsers</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	
    <meta http-equiv="content-language" content="en" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="imagetoolbar" content="no" />

    <meta name="author" content="Manifest Interactive" />
    <meta name="cache-control" content="public" />
    <meta name="company" content="Manifest Interactive, LLC." />
    <meta name="content-language" content="en" />
    <meta name="coverage" content="worldwide" />
    <meta name="description" content="JQVMap is a jQuery plugin that renders Vector Maps. It uses resizable Scalable Vector Graphics (SVG) for modern browsers with legacy support for older browsers via VML." />
    <meta name="distribution" content="global" />
    <meta name="googlebot" content="index,follow" />
    <meta name="keywords" content="JQVMap, jQuery, Vector, Map, SVG, Scalable Vector Graphics, Browser" />
    <meta name="language" content="en" />
    <meta name="revisit-after" content="7 days" />
    <meta name="robots" content="noodp" />
    <meta name="robots" content="index,follow" />

	<!-- Stylesheets -->
	<link rel="stylesheet" type="text/css" href="css/style.css?v=1.0" />
	<link rel="stylesheet" type="text/css" href="css/shCore.css?v=1.0" />
	<link rel="stylesheet" type="text/css" href="css/shCoreRDark.css?v=1.0" />
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Nothing+You+Could+Do|Quicksand:400,700,300" />

	<!-- Favicons -->
	<link rel="shortcut icon" href="img/favicon.ico?v=1.0" />

</head>
<body>
	<!-- Start Wrapper -->
	<div id="page_wrapper">

	<!-- Start Header -->
	<header>
		<div class="container">
			<!-- Start Social Icons -->
			<aside>
				<ul class="social">
					<li class="twitter"><a href="http://twitter.com/JQVMap">Twitter</a></li>
					<li class="rss"><a href="https://github.com/manifestinteractive/jqvmap/commits/stable.atom" title="App Updates">RSS</a></li>
				</ul>
			</aside>
			<!-- End Social Icons -->

			<!-- Start Navigation -->
			<nav>
				<ul>
					<li><a href="#home">World</a></li>
					<li><a href="#usa">USA</a></li>
					<li><a href="#europe">Europe</a></li>
					<li><a href="#germany">Germany</a></li>
					<li><a href="#documentation">Documentation</a></li>
					<li><a href="#updates">Updates</a></li>
				</ul>
				<span class="arrow"></span>
			</nav>
			<!-- End Navigation -->
		</div>
	</header>
	<!-- End Header -->

	<section class="container">

		<!-- Start App Info -->
		<div id="app_info">
			<!-- Start Logo -->
			<a href="#home" class="logo">
				<img src="img/dark-logo.png" alt="jQuery Vector Map" />
			</a>
			<!-- End Logo -->
			<span class="tagline">jQuery Vector Maps</span>
			<p>JQVMap is a jQuery plugin that renders Vector Maps.&nbsp; It uses resizable Scalable Vector Graphics (SVG) for modern browsers like Firefox, Safari, Chrome, Opera and Internet Explorer 9.&nbsp; Legacy support for older versions of Internet Explorer 6-8 is provided via VML.</p>

			<div class="buttons">
				<a href="https://github.com/manifestinteractive/jqvmap" class="large_button" id="apple" target="_blank">
					<span class="icon"></span>
					<em>Fork Me on</em> Github
				</a>
				<a href="https://github.com/manifestinteractive/jqvmap/zipball/stable" class="large_button" id="android">
					<span class="icon"></span>
					<em>Get the Code</em> Download
				</a>
			</div>

			<div class="price right_align"> <!-- Alignments options: right_align, left_align, centered -->
				<p><?PHP echo $source[$random]; ?></p>
			</div>
		</div>
		<!-- End App Info -->

		<!-- Start Pages -->
		<div id="pages">
			<div class="top_shadow"></div>

			<!-- Start Home -->
			<div id="home" class="page">

				<h1>World Vector Map</h1>

				<div class="full">
					<div id="world_map" class="map"></div>
				</div>

				<div class="toggle_list">
					<ul>
						<li>
							<div class="title">
								<h3><span>?</span> View Source Code for this Example</h3>
								<a href="javascript:;" class="toggle_link" data-open_text="+" data-close_text="-"></a>
							</div>
							<div class="content">
<pre class="brush: js">
&lt;script src="js/jquery.vmap.js">&lt;/script>
&lt;script src="js/jquery.vmap.world.js">&lt;/script>
&lt;script src="js/jquery.vmap.sampledata.js">&lt;/script>

&lt;script>
jQuery('#vmap').vectorMap({
	map: 'world_en',
	backgroundColor: null,
	color: '#ffffff',
	hoverOpacity: 0.7,
	selectedColor: '#666666',
	enableZoom: true,
	showTooltip: true,
	values: sample_data,
	scaleColors: ['#C8EEFF', '#006491'],
	normalizeFunction: 'polynomial'
});
&lt;/script>

&lt;div id="vmap" style="width: 600px; height: 400px;">&lt;/div>
</pre>
							</div>
						</li>
					</ul>
				</div>

			</div>
			<!-- End Home -->

			<!-- Start USA -->
			<div id="usa" class="page">

				<h1>USA Vector Map</h1>

				<div class="full">
					<div id="usa_map" class="map"></div>
				</div>

				<div class="toggle_list">
					<ul>
						<li>
							<div class="title">
								<h3><span>?</span> View Source Code for this Example</h3>
								<a href="javascript:;" class="toggle_link" data-open_text="+" data-close_text="-"></a>
							</div>
							<div class="content">
<pre class="brush: js">
&lt;script src="js/jquery.vmap.js">&lt;/script>
&lt;script src="js/jquery.vmap.usa.js">&lt;/script>

&lt;script>
jQuery('#vmap').vectorMap({
	map: 'usa_en',
	backgroundColor: null,
	color: '#ffffff',
	hoverColor: '#999999',
	selectedColor: '#666666',
	enableZoom: true,
	showTooltip: true,
	selectedRegion: 'MO'
});
&lt;/script>

&lt;div id="vmap" style="width: 600px; height: 400px;">&lt;/div>
</pre>
							</div>
						</li>
					</ul>
				</div>

			</div>
			<!-- End USA -->

			<!-- Start Europe -->
			<div id="europe" class="page">

				<h1>Europe Vector Map</h1>

				<div class="full">
					<div id="europe_map" class="map"></div>
				</div>

				<div class="toggle_list">
					<ul>
						<li>
							<div class="title">
								<h3><span>?</span> View Source Code for this Example</h3>
								<a href="javascript:;" class="toggle_link" data-open_text="+" data-close_text="-"></a>
							</div>
							<div class="content">
<pre class="brush: js">
&lt;script src="js/jquery.vmap.js">&lt;/script>
&lt;script src="js/jquery.vmap.europe.js">&lt;/script>

&lt;script>
jQuery('#vmap').vectorMap({
	map: 'europe_en',
	backgroundColor: null,
	color: '#ffffff',
	hoverColor: '#999999',
	enableZoom: false,
	showTooltip: false
});
&lt;/script>

&lt;div id="vmap" style="width: 600px; height: 400px;">&lt;/div>
</pre>
							</div>
						</li>
					</ul>
				</div>

			</div>
			<!-- End Europe -->

			<!-- Start Germany -->
			<div id="germany" class="page">

				<h1>Germany Vector Map</h1>

				<div class="full">
					<div id="germany_map" class="map"></div>
				</div>

				<div class="toggle_list">
					<ul>
						<li>
							<div class="title">
								<h3><span>?</span> View Source Code for this Example</h3>
								<a href="javascript:;" class="toggle_link" data-open_text="+" data-close_text="-"></a>
							</div>
							<div class="content">
<pre class="brush: js">
&lt;script src="js/jquery.vmap.js">&lt;/script>
&lt;script src="js/jquery.vmap.germany.js">&lt;/script>

&lt;script>
jQuery('#vmap').vectorMap({
	map: 'germany_en',
	onRegionClick: function(element, code, region)
	{
		var message = 'You clicked "'
			+ region 
			+ '" which has the code: ' 
			+ code.toUpperCase();
			
		alert(message);
	}
});
&lt;/script>

&lt;div id="vmap" style="width: 600px; height: 400px;">&lt;/div>
</pre>
							</div>
						</li>
					</ul>
				</div>

			</div>
			<!-- End Germany -->

			<!-- Start Documentation -->
			<div id="documentation" class="page">

				<h1>Documentation</h1>

				<div class="full">

					<p>While initializing a map you can provide parameters to change its look and feel.</p>

					<div class="inner">
<pre class="brush: js">
jQuery('#vmap').vectorMap(
{
    map: 'world_en',
	backgroundColor: '#a5bfdd',
	borderColor: '#818181',
	borderOpacity: 0.25,
	borderWidth: 1,
	color: '#f4f3f0',
	enableZoom: true,
	hoverColor: '#c9dfaf',
	hoverOpacity: null,
	normalizeFunction: 'linear',
	scaleColors: ['#b6d6ff', '#005ace'],
	selectedColor: '#c9dfaf',
	selectedRegion: null,
	showTooltip: true,
	onRegionClick: function(element, code, region)
	{
		var message = 'You clicked "'
			+ region 
			+ '" which has the code: ' 
			+ code.toUpperCase();
			
		alert(message);
	}
});
</pre>
					</div>  
					<dl>
						<dt>map <span>world_en</span></dt>
						<dd>Map you want to load. Must include the javascript file with the name of the map you want. Available maps with this library are <code>world_en</code>, <code>usa_en</code>, <code>europe_en</code> and <code>germany_en</code></dd>
						
						<dt>backgroundColor <span>#a5bfdd</span></dt>
						<dd>Background color of map container in any CSS compatible format. </dd>
						
						<dt>borderColor <span>#818181</span></dt>
						<dd>Border Color to use to outline map objects</dd>
						
						<dt>borderOpacity <span>0.5</span></dt>
						<dd>Border Opacity to use to outline map objects ( use anything from 0-1, e.g. 0.5, defaults to 0.25 )</dd>
						
						<dt>borderWidth <span>3</span></dt>
						<dd>Border Width to use to outline map objects ( defaults to 1 )</dd>
						
						<dt>color <span>#f4f3f0</span></dt>
						<dd>Color of map regions. </dd>
						
						<dt>colors <span> </span></dt>
						<dd>Colors of individual map regions. Keys of the <code>colors</code> objects are country codes according to <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"> ISO 3166-1 alpha-2</a> standard. Keys of <code>colors</code> must be in lower case. </dd>
						
						<dt>enableZoom <span>boolean</span></dt>
						<dd>Whether to Enable Map Zoom ( true or false, defaults to true)</dd>
						
						<dt>hoverColor <span>#c9dfaf</span></dt>
						<dd>Color of the region when mouse pointer is over it. </dd>
						
						<dt>hoverOpacity <span>0.5</span></dt>
						<dd>Opacity of the region when mouse pointer is over it. </dd>
						
				        <dt>normalizeFunction <span>'linear'</span></dt>
				        <dd>This function can be used to improve results of visualizations for data with non-linear nature. Function gets raw value as the first parameter and should return value which will be used in calculations of color, with which particular region will be painted. </dd>
						
				        <dt>scaleColors <span>['#b6d6ff', '#005ace']</span></dt>
				        <dd>This option defines colors, with which regions will be painted when you set option <code>values</code>. Array <code>scaleColors</code> can have more then two elements. Elements should be strings representing colors in RGB hex format. </dd>
						
						<dt>selectedRegion <span>mo</span></dt>
						<dd>This is the Region that you are looking to have preselected (two letter ISO code, defaults to null )
							<div class="toggle_list" style="margin-top: 16px">
								<ul>
									<li>
										<div class="title">
											<h3><span>?</span> Region Names &amp; Codes</h3>
											<a href="javascript:;" class="toggle_link" data-open_text="+" data-close_text="-"></a>
										</div>
										<div class="content">
<pre class="brush: plain">
WORLD
------------------------------
AE = United Arab Emirates
AF = Afghanistan
AG = Antigua and Barbuda
AL = Albania
AM = Armenia
AO = Angola
AR = Argentina
AT = Austria
AU = Australia
AZ = Azerbaijan
BA = Bosnia and Herzegovina
BB = Barbados
BD = Bangladesh
BE = Belgium
BF = Burkina Faso
BG = Bulgaria
BI = Burundi
BJ = Benin
BN = Brunei Darussalam
BO = Bolivia
BR = Brazil
BS = Bahamas
BT = Bhutan
BW = Botswana
BY = Belarus
BZ = Belize
CA = Canada
CD = Congo
CF = Central African Republic
CG = Congo
CH = Switzerland
CI = Cote d'Ivoire
CL = Chile
CM = Cameroon
CN = China
CO = Colombia
CR = Costa Rica
CU = Cuba
CV = Cape Verde
CY = Cyprus
CZ = Czech Republic
DE = Germany
DJ = Djibouti
DK = Denmark
DM = Dominica
DO = Dominican Republic
DZ = Algeria
EC = Ecuador
EE = Estonia
EG = Egypt
ER = Eritrea
ES = Spain
ET = Ethiopia
FI = Finland
FJ = Fiji
FK = Falkland Islands
FR = France
GA = Gabon
GB = United Kingdom
GD = Grenada
GE = Georgia
GF = French Guiana
GH = Ghana
GL = Greenland
GM = Gambia
GN = Guinea
GQ = Equatorial Guinea
GR = Greece
GT = Guatemala
GW = Guinea-Bissau
GY = Guyana
HN = Honduras
HR = Croatia
HT = Haiti
HU = Hungary
ID = Indonesia
IE = Ireland
IL = Israel
IN = India
IQ = Iraq
IR = Iran
IS = Iceland
IT = Italy
JM = Jamaica
JO = Jordan
JP = Japan
KE = Kenya
KG = Kyrgyz Republic
KH = Cambodia
KM = Comoros
KN = Saint Kitts and Nevis
KP = North Korea
KR = South Korea
KW = Kuwait
KZ = Kazakhstan
LA = Lao People's Democratic Republic
LB = Lebanon
LC = Saint Lucia
LK = Sri Lanka
LR = Liberia
LS = Lesotho
LT = Lithuania
LV = Latvia
LY = Libya
MA = Morocco
MD = Moldova
MG = Madagascar
MK = Macedonia
ML = Mali
MM = Myanmar
MN = Mongolia
MR = Mauritania
MT = Malta
MU = Mauritius
MV = Maldives
MW = Malawi
MX = Mexico
MY = Malaysia
MZ = Mozambique
NA = Namibia
NC = New Caledonia
NE = Niger
NG = Nigeria
NI = Nicaragua
NL = Netherlands
NO = Norway
NP = Nepal
NZ = New Zealand
OM = Oman
PA = Panama
PE = Peru
PF = French Polynesia
PG = Papua New Guinea
PH = Philippines
PK = Pakistan
PL = Poland
PT = Portugal
PY = Paraguay
QA = Qatar
RE = Reunion
RO = Romania
RS = Serbia
RU = Russian Federationß
RW = Rwanda
SA = Saudi Arabia
SB = Solomon Islands
SC = Seychelles
SD = Sudan
SE = Sweden
SI = Slovenia
SK = Slovakia
SL = Sierra Leone
SN = Senegal
SO = Somalia
SR = Suriname
ST = Sao Tome and Principe
SV = El Salvador
SY = Syrian Arab Republic
SZ = Swaziland
TD = Chad
TG = Togo
TH = Thailand
TJ = Tajikistan
TL = Timor-Leste
TM = Turkmenistan
TN = Tunisia
TR = Turkey
TT = Trinidad and Tobago
TW = Taiwan
TZ = Tanzania
UA = Ukraine
UG = Uganda
US = United States of America
UY = Uruguay
UZ = Uzbekistan
VE = Venezuela
VN = Vietnam
VU = Vanuatu
YE = Yemen
ZA = South Africa
ZM = Zambia
ZW = Zimbabwe

USA
------------------------------
AK = Alaska
AL = Alabama
AR = Arkansas
AZ = Arizona
CA = California
CO = Colorado
CT = Connecticut
DC = District of Columbia
DE = Delaware
FL = Florida
GA = Georgia
HI = Hawaii
IA = Iowa
ID = Idaho
IL = Illinois
IN = Indiana
KS = Kansas
KY = Kentucky
LA = Louisiana
MA = Massachusetts
MD = Maryland
ME = Maine
MI = Michigan
MN = Minnesota
MO = Missouri
MS = Mississippi
MT = Montana
NC = North Carolina
ND = North Dakota
NE = Nebraska
NH = New Hampshire
NJ = New Jersey
NM = New Mexico
NV = Nevada
NY = New York
OH = Ohio
OK = Oklahoma
OR = Oregon
PA = Pennsylvania
RI = Rhode Island
SC = South Carolina
SD = South Dakota
TN = Tennessee
TX = Texas
UT = Utah
VA = Virginia
VT = Vermont
WA = Washington
WI = Wisconsin
WV = West Virginia
WY = Wyoming

EUROPE
------------------------------
AD = Andorra
AL = Albania
AM = Armenia
AT = Austria
AZ = Azerbaijan
BA = Bosnia and Herzegovina
BE = Belgium
BG = Bulgaria
BY = Belarus
CH = Switzerland
CY = Cyprus
CZ = Czech Republic
DE = Germany
DK = Denmark
DZ = Algeria
EE = Estonia
ES = Spain
FI = Finland
FR = France
GB = United Kingdom
GE = Georgia
GL = Greenland
GR = Greece
HR = Croatia
HU = Hungary
IE = Ireland
IL = Israel
IQ = Iraq
IR = Iran
IS = Iceland
IT = Italy
JO = Jordan
KZ = Kazakhstan
LB = Lebanon
LI = Liechtenstein
LT = Lithuania
LU = Luxembourg
LV = Latvia
MA = Morocco
MC = Monaco
MD = Moldova
ME = Montenegro
MK = Macedonia
MT = Malta
NL = Netherlands
NO = Norway
PL = Poland
PT = Portugal
RO = Romania
RU = Russian Federation
SA = Saudi Arabia
SE = Sweden
SI = Slovenia
SK = Slovakia
SM = San Marino
SR = Suriname
SY = Syrian Arab Republic
TM = Turkmenistan
TN = Tunisia
TR = Turkey
UA = Ukraine

GERMANY
------------------------------
BB = Brandenburg
BE = Berlin
BW = Baden-WÃrttemberg
BY = Bayern
HB = Bremen
HE = Hessen
HH = Hamburg
MV = Mecklenburg-Vorpommern
NI = Niedersachsen
NW = Nordrhein-Westfalen
RP = Rheinland-Pfalz
SH = Schleswig-Holstein
SL = Saarland
SN = Sachsen
ST = Sachsen-Anhalt
TH = ThÃri
</pre>
										</div>
									</li>
								</ul>
							</div>
	        			</dd>
						
						<dt>showTooltip <span>boolean</span></dt>
						<dd>Whether to show Tooltips on Mouseover ( true or false, defaults to true)</dd>
						
				        <dt>onLabelShow <span>function(element, label, code)</span></dt>
				        <dd>Callback function which will be called before label is shown. Label DOM object and country code will be passed to the callback as arguments. </dd>
						
				        <dt>onRegionOver <span>function(element, code, region)</span></dt>
				        <dd>Callback function which will be called when the mouse cursor enters the region path. Country code will be passed to the callback as argument. </dd>
        				
				        <dt>onRegionOut <span>function(element, code, region)</span></dt>
				        <dd>Callback function which will be called when the mouse cursor leaves the region path. Country code will be passed to the callback as argument. </dd>
        
				        <dt>onRegionClick <span>function(element, code, region)</span></dt>
				        <dd>Callback function which will be called when the user clicks the region path. Country code will be passed to the callback as argument. </dd>
					</dl>

      			  	<h1 style="margin-top: 30px;">Dynamic Updating</h1>
    
      			  	<p>Most of the options can be changed after initialization using the following code:</p>

					<div class="inner">
<pre class="brush: js">
jQuery('#vmap').vectorMap('set', 'colors', {us: '#0000ff'});
</pre>
					</div>
	
      				<p>Instead of <code>colors</code> can be used any parameter except callbacks. Callbacks can be added and deleted using standard jQuery patterns of working with events.</p>
    
      			  	<p>You can define callback function when you initialize JQVMap:</p>
    
					<div class="inner">
<pre class="brush: js">
jQuery('#vmap').vectorMap(
{
	onLabelShow: function(event, label, code)
	{
	
	},
	onRegionOver: function(event, code, region)
	{
	
	},
	onRegionOut: function(event, code, region)
	{
	
	},
	onRegionClick: function(event, code, region)
	{
	
	}
});
</pre>
					</div>

      			  	<p>Or later using standard jQuery mechanism:</p>
    
					<div class="inner">
<pre class="brush: js">
jQuery('#vmap').bind('labelShow.jqvmap', 
	function(event, label, code)
	{
	
	}
);
jQuery('#vmap').bind('regionMouseOver.jqvmap', 
	function(event, code, region)
	{
	
	}
);
jQuery('#vmap').bind('regionMouseOut.jqvmap',
	function(event, code, region)
	{
	
	}
);
jQuery('#vmap').bind('regionClick.jqvmap',
	function(event, code, region)
	{
	
	}
);
</pre>
					</div>
    
      			  	<p>Consider that fact that you can use standard features of jQuery events like <code>event.preventDefault()</code> or returning false from the callback to prevent default behavior of JQVMap (showing label or changing country color on hover). In the following example, when user moves mouse cursor over Canada label won't be shown and color of country won't be changed. At the same label for Russia will have custom text.</p>
    
					<div class="inner">
<pre class="brush: js">
jQuery('#vmap').vectorMap(
{
    onLabelShow: function(event, label, code)
	{
        if (code == 'ca')
		{
            event.preventDefault();
        }
		else if (code == 'ru')
		{
            label.text('Bears, vodka, balalaika');
        }
    },
    onRegionOver: function(event, code)
	{
        if (code == 'ca')
		{
            event.preventDefault();
        }
    },
});
</pre>
					</div>

      			  	<h1 style="margin-top: 30px;">Data Visualization</h1>
      
      			  	<p>Here I want to demonstrate how visualization of some geographical-related data can be done using JQVMap. Let's visualize information about GDP in 2010 for every country. At first we need some data. Let it be <a href="http://www.imf.org/external/pubs/ft/weo/2011/01/weodata/index.aspx"> site</a> of International Monetary Fond. There we can get information in xsl format, which can be converted first to csv and then to json with any scripting language. Now we have file <code>gdp-data.js</code> with such content (globals are evil, I know, but just for the sake of simplification):</p>
    
					<div class="inner">
<pre class="brush: js">
var sample_data = {"af":16.63,"al":11.58,"dz":158.97,...};
</pre>
					</div>
    
      			  	<p>Then connect it to the page and add some code to make visualization:</p>
    
					<div class="inner">
<pre class="brush: js">
var max = 0,
    min = Number.MAX_VALUE,
    cc,
    startColor = [200, 238, 255],
    endColor = [0, 100, 145],
    colors = {},
    hex;
	
//find maximum and minimum values
for (cc in gdpData)
{
    if (parseFloat(gdpData[cc]) > max)
	{
        max = parseFloat(gdpData[cc]);
    }
    if (parseFloat(gdpData[cc]) &lt; min)
	{
        min = parseFloat(gdpData[cc]);
    }
}

//set colors according to values of GDP
for (cc in gdpData)
{
    if (gdpData[cc] > 0)
	{
        colors[cc] = '#';
        for (var i = 0; i&lt;3; i++)
		{
            hex = Math.round(startColor[i] 
				+ (endColor[i] 
				- startColor[i])
				* (gdpData[cc] / (max - min))).toString(16);
            
			if (hex.length == 1)
			{
                hex = '0'+hex;
            }
			
            colors[cc] += (hex.length == 1 ? '0' : '') + hex;
        }
    }
}

//initialize JQVMap
jQuery('#vmap').vectorMap(
{
    colors: colors,
    hoverOpacity: 0.7,
    hoverColor: false
});
</pre>
					</div>
					
					<h1 style="margin-top: 30px;">Custom Maps</h1>
					<p>For information on building your own custom maps to use with this library, check out our Github project at <a href="https://github.com/manifestinteractive/jqvmap" target="_blank">https://github.com/manifestinteractive/jqvmap</a></p>
				</div>

			</div>
			<!-- End Documentation -->

			<!-- Start Updates -->
			<div id="updates" class="page">

				<h1>Updates</h1>

				<div class="releases">
					<article class="release">
						<h2>Version 1.0</h2>
						<span class="date">Released on May 6th, 2012</span>
						<ul>
							<li class="new"><span><b>New</b></span> Initial Release</li>
							<!--//<li class="fix"><span><b>fix</b></span> </li>//-->
						</ul>
					</article>
				</div>

			</div>
			<!-- End Updates -->


			<div class="bottom_shadow"></div>
		</div>
		<!-- End Pages -->

		<div class="clear"></div>
	</section>

	<!-- Start Footer -->
	<footer class="container">
		<p><a href="https://github.com/manifestinteractive/jqvmap" style="color: #999">&nbsp;JQVMap is an Open Source Project Hosted on Github.com&nbsp;</a></p>
	</footer>
	<!-- End Footer -->

	</div>
	<!-- End Wrapper -->
	
	<!-- Javascripts -->
	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/html5shiv.js"></script>
	<script type="text/javascript" src="js/jquery.tipsy.js"></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.js"></script>
	<script type="text/javascript" src="js/jquery.mobilemenu.js"></script>
	<script type="text/javascript" src="js/jquery.infieldlabel.js"></script>
	
	<script type="text/javascript" src="js/sh/shCore.js"></script>
	<script type="text/javascript" src="js/sh/shBrushJScript.js"></script>
	<script type="text/javascript" src="js/sh/shBrushXml.js"></script>
	<script type="text/javascript" src="js/sh/shBrushPlain.js"></script>

	<script type="text/javascript" src="js/vmap/jquery.vmap.js?v=1.0"></script>
	<script type="text/javascript" src="js/vmap/jquery.vmap.usa.js?v=1.0"></script>
	<script type="text/javascript" src="js/vmap/jquery.vmap.world.js?v=1.0"></script>
	<script type="text/javascript" src="js/vmap/jquery.vmap.sampledata.js?v=1.0"></script>
	<script type="text/javascript" src="js/vmap/jquery.vmap.europe.js?v=1.0"></script>
	<script type="text/javascript" src="js/vmap/jquery.vmap.germany.js?v=1.0"></script>

	<script type="text/javascript" src="js/site.js?v=1.0"></script>
	
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-31480580-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
</body>
</html>