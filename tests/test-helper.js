import Application from "booking-system-playground/app";
import config from "booking-system-playground/config/environment";
import * as QUnit from "qunit";
import {setApplication} from "@ember/test-helpers";
import {setup} from "qunit-dom";
import {start} from "ember-qunit";

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
