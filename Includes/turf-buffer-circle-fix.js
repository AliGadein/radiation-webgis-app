/*
function Radians(degrees) {
    return degrees * Math.PI / 180;
};

function Degrees(radians) {
	return radians * 180 / Math.PI;
};

function Earthradius(lat) {
    var An = 6378137.0 * 6378137.0 * Math.cos(lat);
    var Bn = 6356752.3 * 6356752.3 * Math.sin(lat);
    var Ad = 6378137.0 * Math.cos(lat);
    var Bd = 6356752.3 * Math.sin(lat);

    return Math.sqrt((An * An + Bn * Bn) / (Ad * Ad + Bd * Bd));
};

function DestinationPoint(latdeg, lngdeg, distInMeter, angleDeg) {
	var θ = Radians(Number(angleDeg));
	var δ = Number(distInMeter / Earthradius(latdeg));

	var φ1 = Radians(latdeg);
	var λ1 = Radians(lngdeg);

	var φ2 = Math.asin(
		Math.sin(φ1) * Math.cos(δ) +
		Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
	var λ2 = λ1 + Math.atan2(
		Math.sin(θ) * Math.sin(δ) * Math.cos(φ1),
		Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

	// Normalise to -180..+180°.
	λ2 = (λ2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

	return [Degrees(φ2), Degrees(λ2)];
};
*/