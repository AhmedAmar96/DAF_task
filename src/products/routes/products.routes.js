const { getCsvFile, uploadCsvFile } = require('../../users/controller/user.controller');
const router = require('express').Router();

router.get("/", getCsvFile);
router.post("/import-csv", upload.single("import-csv"), uploadCsvFile);

module.exports = router;