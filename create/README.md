![JQVMap](http://jqvmap.com/img/logo.png "JQVMap")

Creating Custom Maps for JQVMaps
===

Special thanks again to [jvectormap](http://jvectormap.com) for creating the base converter for this.  I have flushed out the documentation a little more for any Python newbies out there ( like myself ). But I am happy to say that I now have working maps getting created.

Creating maps is actually a bit of work, and should really only be done by those familiar with Python & a Terminal Window, as these are the tools you will need to create maps.  If you are OK with this, here is what you need to know to get started:

Requirements
---

#### Overview:

You will need to have the following installed:

1. [Python](https://www.python.org/downloads/) _( 2.7+ )_
2. [GDAL](http://trac.osgeo.org/gdal/wiki/DownloadingGdalBinaries) _( OS Binary )_
3. [GDAL](https://pypi.python.org/pypi/GDAL/) _( Python Package )_
4. [Shapely](https://pypi.python.org/pypi/Shapely/1.2.16) _( Python Package )_
5. [Booleano](http://code.gustavonarea.net/booleano/index.html) _( Python Package )_

Note: If you have issues installing either Python Package, please see the links in the Requirements Overview for detailed install instructions.


#### Installing Software:

__\#1__. Download & Install Python by clicking one of the Download Python buttons on the [Python Website](https://www.python.org/downloads/).  We are using `v2.7.10`.

__\#2__. Open a Terminal window and make sure Python installed correctly by typing the following:

```bash
which pip
```

which should return something like ( if it did not, you did not install Python correctly ):

```
/Library/Frameworks/Python.framework/Versions/2.7/bin/pip
```

You may also wish to update PIP to disable warnings in the future:

```bash
pip install --upgrade pip
```

__\#3__. Now we need to install the GDAL OS Binary.  Visit the [GDAL/OGR binaries](http://trac.osgeo.org/gdal/wiki/DownloadingGdalBinaries) and follow the steps they layout for your designated OS.

__OSX:__

To simplify things, if you are on OSX, just download and install the [GDAL 1.11 Complete](http://www.kyngchaos.com/files/software/frameworks/GDAL_Complete-1.11.dmg) Package.

If you have [Homebew](http://brew.sh/) installed, you can run the following, though I personally had issues with it working 100%

```bash
brew update
brew install gdal
```

__Windows:__

For Windows, you should be able to run [Maptools](http://www.maptools.org/ms4w/index.phtml?page=downloads.html) - [MS4W installer](http://www.maptools.org/dl/ms4w/ms4w-3.0.6-setup.exe) to get everything you need.

__\#4__. With Python & GDAL Binaries installed, we can now install the required Python packages via the following Terminal Commands:


```bash
sudo easy_install GDAL
pip install shapely
pip install booleano
```

Downloading Map Sources
---

Before you can create custom maps, you need to download the vector data from the source.  You specifically need the Shapefile `.shp` file format. You will need to use a search engine to find the Shapefile for the map you want to create.  This can usually be done by just searching for something like "New York Shapefile" or "Syria Shapefile" in Google.

Once you have the file you want, just download it and copy the `.shp` files you want to the `./create/source` folder in this project.

If you would like to test the sample map config files we have in this project, you will need to download the following:

1. [SHP/GeoDB Vector Themes](http://naciscdn.org/naturalearth/packages/natural_earth_vector.zip) from [Natural Earth](http://www.naturalearthdata.com/downloads/).  Unzip the `natural_earth_vector.zip` file and copy the entire `natural_earth_vector` folder to the `./create/source` folder in this project. __TIP:__ If you plan on using this source, `code_field` is `iso_a3` and `name_field` is `name_long`.

2. [Global Administrative Areas](http://www.gadm.org/country) has an updated Shapefile for pretty much every country.  Just select the `Country` you want ( for this example, `Syria` ) and set `File format` to `Shapefile` and press the `OK` button to download.  This will take you to a download page.  Click the `download` link and save the zip file.  For this example, unzip the `SYR_adm_shp.zip` file and copy the entire `SYR_adm_shp` folder to the `./create/source` folder in this project. __TIP:__ If you plan on using this source, `code_field` is `ISO` and `name_field` is `NAME_ENGLI`.

3. [New York - Borough Boundaries (Clipped to Shoreline)](http://www.nyc.gov/html/dcp/download/bytes/nybb_15d.zip) from the [NYC.gov](http://www.nyc.gov/html/dcp/html/bytes/districts_download_metadata.shtml) website.  Unzip the `nybb_15d.zip` file and copy the entire `nybb_15d` folder to the `./create/source` folder in this project.


Creating Maps
---

#### Map Configurations

You can create a custom JSON file and save it in the `./create/config` folder.  Then you can run the following command in a Terminal Window.

```bash
cd /path/to/jqvmap/create
python processor.py config/my-map.json
```

The map creator will output the new JQVMap files into the `./create/output` folder.

#### Sample Map Configurations

We have already setup a few custom config files for you to play with. With a Terminal Window open, run the following commands ( make sure to change `/path/to/jqvmap` to wherever you have this project installed. ):

```bash
cd /path/to/jqvmap/create
python processor.py config/continent.json
python processor.py config/new-york.json
python processor.py config/syria.json
```

#### Map Configuration JSON Options:

The following are the complete list of JSON configuration options for you to use. Make sure to look at the samples in the config folder to get an idea on how to use these with your map.

|Command|Config|Option|Description|
|---|---|---|---|
|`read_data`| | |Read geometries from GIS data file|
| |`file_name`| |The name of the file to read|
| |`longitude0`| |Central meridian coordinate|
| |`projection`| |The map projection to use, currently implemented projections are `merc` (Mercator), `mill` (Miller Cylindrical), `aea` (Albers Equal Area) & `lcc` (Lambert Conformal Conic)|
|`write_data`| | |Writes geometries to file|
| |`file_name`| |The name of the file to write|
| |`format`| |Format of data to write, `jqvmap` for JQVMap compatible format, no value for OGR format|
| |`params`| |Hash with parameters to supply to writer, the following parameters are used in case of jqvmap format:|
| | |`code_field`|Name of field to use as a region code, This is usually found along side your `.shp` file as either an `.csv` file or `.xml`. And you are just looking for the column name that has the ISO Code ( 2-3 letters ). You might need to use a DBF Viewer to view the `.dbf` file if the CSV & XML don't exists.|
| | |`name_field`|Name of field to use as a region name. This is usually found along side your `.shp` file as either an `.csv` file or `.xml`. And you are just looking for the column name that has the ISO Name ( English Name ). You might need to use a DBF Viewer to view the `.dbf` file if the CSV & XML don't exists.|
| | |`name`|Map base name|
|`union`| | |Merges geometries with the same value for one field|
| |`by`| |The name of the field to merge geometries by|
|`join_data`| | |Adds or rewrites properties for geoemtry based on equal values in another field, works similar to JOIN operation from SQL|
| |`data`| |This could raw data to join or file name of CSv file with data to load|
| |`fields`| |Array describing fields, which data contains|
| |`on`| |Field to match to join data|
|`remove`| | |Removes geometries and their properties based on logical expression|
| |`where `| |Expression to evaluate for each geometry|
|`remove_fields`| | |Removes fields and associated properties|
| |`fields`| |Array with field names to remove|
|`remove_other_fields`| | |Removes all fields and associated properties except the ones provided|
| |`fields`| |Array with field names to preserve|
|`buffer`| | |Removes (erosion) or adds (dilation) zone around every geoemtry|
| |`distance`| | |
| |`resolution`| | |
|`simplify_adjancent_polygons`| | |Simplifies polygons taking topology into account (shared borders remain shared after operation)|
| |`tolerance`| |Simplification tolerance|
|`intersect_rect`| | |Cuts out everything beyond boubdaries of supplied rectangle|
| |`rect`| |Array with four values, defining left-top and right-bottom corners of rectange|
|`remove_small_polygons`| | |Removes polygons which area is less than supplied value|
| |`minimal_area`| | |
