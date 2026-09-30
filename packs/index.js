/*
 * STRATA pack list: the ONE place built-in packs are declared.
 * To add a pack: drop the file in packs/ and add its file name below.
 * Files load in this order via <script src>, so this works over file:// and http.
 * This file is also imported by sw.js (so every pack is precached for offline use);
 * keep it plain (no DOM access).
 */
self.STRATA_PACK_FILES = [
  "core.js"
];
