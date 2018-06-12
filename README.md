"# DamaskusEntdecken" 
Benötigt:
- FontAwesome: https://fontawesome.com/



Jedes Objekt in data.js enthält verschiedene Bilder und Videos, die aufgrund der Lizensen nicht
gepublished wurden. Um eigene Bilder und Videos einzubinden müssen folgende Attribute geändert 
werden.

- Startbildschirm eines Kapitels (=Objekt, z.B. karawanserei): 
	* "backgroundPath": Auf der obersten Ebene des Objekts

- Start Video nach Startbildschirm eines Kapitels (=Objekt, z.B. karawanserei):
	* "movieObjekt": Auf der obersten Ebene des Objekts

- Hintergrundbild einer Szene:
	* "backgroundPath": befindet sich im array "scenes"

- Einzelne Bilder in einer Szene (z.B. ein Tisch)
	* "path": befindet sich im Array "sceneObjects" im Array "scenes"
	* "blurred": falls mehrere einzelne Bilder vorhanden benötigt jedes Bild ein blurred Bild

- Falls Über einzelne Bilder gehovert wird, muss Hintergrundbild geblurred sein
	* "blurredBackgroundPaths": im Array "scenes"
