public class Saludo {
    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);

        System.out.print("Introduzca su nombre: ");
        String cadena = scanner.nextLine();

        System.out.println("Bienvenido " + cadena);
        scanner.close();
    }
}
