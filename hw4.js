package st;
 
import java.util.Scanner;
 
public class NewClass4 {
 
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
 
        System.out.println("Введите число А");
        int a = scan.nextInt();
        System.out.println("Введите число В");
        int b = scan.nextInt();
        System.out.println("Введите число C");
        int c = scan.nextInt();
        int g = a * b * c;
        int h = a + b + c;
        int m = Math.max(g, h);
 
        System.out.println(m + 3);
  
    }
}