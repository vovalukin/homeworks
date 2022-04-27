Integer integer = 12311;
BigInteger bigInteger = BigInteger.valueOf(integer);
boolean probablePrime = bigInteger.isProbablePrime((int) Math.log(integer));
System.out.println(probablePrime);