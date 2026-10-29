/*
 * STRATA pack list: the ONE place built-in packs are declared.
 * To add a pack: drop the file in packs/ and add its file name below.
 * Files load in this order via <script src>, so it works over file:// and http.
 * This file is also imported by sw.js (so every pack is precached for offline use);
 * keep it plain (no DOM access).
 * Topic packs first (primary geo-pe-01…10, then expansion geo-pe-01b…10b) so their
 * units render ahead of core's additional/shell units under the same PE topic number.
 */
self.STRATA_PACK_FILES = [
  "geo-pe-01-site-char.js",
  "geo-pe-02-soil-mech.js",
  "geo-pe-03-construction.js",
  "geo-pe-04-earthquake.js",
  "geo-pe-05-earth-structures.js",
  "geo-pe-06-groundwater.js",
  "geo-pe-07-problematic.js",
  "geo-pe-08-retaining.js",
  "geo-pe-09-shallow.js",
  "geo-pe-10-deep.js",
  "geo-pe-01b-site-char.js",
  "geo-pe-02b-soil-mech.js",
  "geo-pe-03b-construction.js",
  "geo-pe-04b-earthquake.js",
  "geo-pe-05b-earth-structures.js",
  "geo-pe-06b-groundwater.js",
  "geo-pe-07b-problematic.js",
  "geo-pe-08b-retaining.js",
  "geo-pe-09b-shallow.js",
  "geo-pe-10b-deep.js",
  "geo-pe-yt-calc-01.js",
  "core.js"
];
