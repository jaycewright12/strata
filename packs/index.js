/*
 * STRATA pack list: the ONE place built-in packs are declared.
 * To add a pack: drop the file in packs/ and add its file name below.
 * Files load in this order via <script src>, so it works over file:// and http.
 * This file is also imported by sw.js (so every pack is precached for offline use);
 * keep it plain (no DOM access).
 * Topic packs first so their units render ahead of core's additional/shell units
 * under the same PE topic number.
 */
self.STRATA_PACK_FILES = [
  "geo-pe-01-site-char.js",
  "geo-pe-02-soil-mech.js",
  "core.js"
];
