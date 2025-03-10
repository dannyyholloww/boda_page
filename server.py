from flask import Flask, request, jsonify
import csv

app = Flask(__name__)

@app.route("/guardar_asistencia", methods=["POST"])
def guardar_asistencia():
    data = request.json

    nombre = data.get("nombre")
    invitados = data.get("invitados")
    comentarios = data.get("comentarios", "")  # Comentarios opcionales

    # Validar que los datos obligatorios estén presentes
    if not nombre or not invitados:
        return jsonify({"mensaje": "Faltan datos obligatorios"}), 400

    # Guardar los datos en un archivo CSV
    with open("asistencia.csv", "a", newline="") as file:
        writer = csv.writer(file)
        
        # Escribir los datos en una nueva fila
        writer.writerow([nombre, invitados, comentarios])

    return jsonify({"mensaje": "Asistencia guardada correctamente"}), 200

if __name__ == "__main__":
    app.run(debug=True)
