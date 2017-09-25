
from osgeo import ogr, osr

dataset = ogr.Open('./source/KEN_adm_shp/KEN_adm2.shp')
layer = dataset.GetLayerByIndex(0)
layer.ResetReading()

# Location for New Orleans: 29.98 N, -90.25 E
point = ogr.CreateGeometryFromWkt("POINT(37.6 -1.7)")
# point = ogr.CreateGeometryFromWkt("POINT(-90.25 29.98)")

# Transform the point into the specified coordinate system from WGS84
spatialRef = osr.SpatialReference()
spatialRef.ImportFromEPSG(4326)
coordTransform = osr.CoordinateTransformation(
    spatialRef, layer.GetSpatialRef())

point.Transform(coordTransform)
matched_feature = None
for feature in layer:
    if feature.GetGeometryRef().Contains(point):
        matched_feature = feature
        break

if matched_feature:
    for i in range(matched_feature.GetFieldCount()):
        print feature.GetField(i)
