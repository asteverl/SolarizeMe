import "bootstrap";
import Chartkick from "chartkick";
window.Chartkick = Chartkick;
import Highcharts from "highcharts";
Chartkick.addAdapter(Highcharts);
import "navbar";
import "filter";
import "map";
