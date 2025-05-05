public class Palindromo {
    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);

        System.out.print("Ingrese una cadena: ");
        String cadena = scanner.nextLine();
        String cadenaInversa = "";

        for (int i = cadena.length() - 1; i >= 0; i--) {
            cadenaInversa += cadena.charAt(i);
        }
        if (cadenaInversa.equals(cadena)) {
            System.out.println("La cadena es un palíndromo");
        } else {
            System.out.println("La cadena no es un palíndromo");
        }
        scanner.close();
    }
}
