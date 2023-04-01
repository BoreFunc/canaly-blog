# Versions of libreaderex

`ReaderEx`, or `libreaderex`, which is a dynamic library developed by the author of CAJ format. It is used to parse CAJ files. It is not open source, so we have to reverse engineer it to understand how it works.

Here're the versions of libreaderex we have collected so far:  

| Architecture | Operating System | File Type  |    Used By     |      File Name     |    Date    |                              SHA256                              |  
|--------------|------------------|------------|----------------|--------------------|------------|------------------------------------------------------------------|  
| I386         | Windows          | PE32       | Viewer 7.2     | ReaderEx.dll1      | 2019/2/26  | fe46791b974160a827309796aa4d6aac7a8f5d87c3c28050f91e740166ce46d1 |  
| I386         | Windows          | PE32       | Viewer 7.2     | ReaderEx.dll1      | 2013/11/15 | 44cb3e9a13140a1fc3993af8dce0d7e14cb8a0eff81b51a7d4c1125e641667b3 |  
| I386         | Windows          | PE32       | Viewer 7.2     | ReaderEx.dll1      | 2012/3/7   | 9db28020f9b5d0d2fcd269b94ce84bcbcc815d7deb5f50aa5b6ac2134fefac00 |  
| I386         | Windows          | PE32       | Viewer 7.31    | ReaderEx.dll       | 2022/6/8   | e8a14b2f257f47b762c19ba0b7a8fd1c90e0a6e6998186f1664165c0dccb10d6 |  
| AMD64        | Windows          | PE32       | Viewer 8.0     | ReaderEx.dll       | 2022/8/29  | 43985b73c0458948d9e67d57b2a9cbb6caf6ab808e04c8709dcc8993371159ab |
| AMD64        | Windows          | PE64       | Viewer 8.1     | ReaderEx_x64.dll   | 2023/2/16  | a87382daf998b534b6a687336e2936076a663846d01a2be2e215178774499c8d |
| MIPS64       | Linux (NeoKylin) | ELF64      | Viewer 1.0.3   | libreaderex_x64.so | 2021/3/11  | dca813b1a9bca01ce66fae20b32c00310a12c4be188c25513d75f908f09ffdb9 |
| AMD64        | Linux (Ubuntu)   | ELF64      | Viewer 1.0     | libreaderex_x64.so | 2019/5/5   | 4078a927052e013f55876c10f1932dcc91d8409971a3eb0ddbf47b47a72a67c0 |
| AMD64        | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex_x64.so | 2021/4/1   | 90201bfc1342353a8b6c4cbce8f92040183d5f1ad922e469611bb718f5329a70 |
| AMD64        | Linux (Ubuntu)   | ELF64      | Express 0.2.31 | libreaderex_x64.so | 2022/12/20 | 826e861257a96fae8d5eb72a5fd8e3244be61a75e7c2c10f51e29c3766171a41 |
| AARCH64      | Android          | ELF64      | Express        | libreaderex.so     | Unknown    | 1ab6398a8c6a4c6630c325da3b34347064f10810df96867145c5d5c6a5f25f47 |
| ARMEABI      | Android          | ELF32      | Express        | libreaderex.so     | Unknown    | bf72ca3ea3e90dc0bb8182dcd1f5e4fa9d2ef5fb090be28bd3d488dde3b8b5a0 |
| AMD64        | Linux (Ubuntu)   | ELF64      | Express 0.2.31 | libreaderex.so     | 2022/12/20 | 826e861257a96fae8d5eb72a5fd8e3244be61a75e7c2c10f51e29c3766171a41 |
| AMD64        | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex.so     | 2021/2/25  | 770a9442cbcf22493f17fe8c51a59788988cb58e4c905a8210ddd295916a90ce |
| MIPS64       | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex.so     | 2021/4/28  | 447a39a554a328da7510bfe484d9713f112e722326455b6ab8bf161bc9d24860 |
| SW64         | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex.so     | 2020/9/24  | 4ca8f05d07965a851fa660fc3ea9443ed96be690ef97b13f92d9d24ff6b924a7 |
| MIPS64       | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex.so     | 2020/11/4  | 2c030a90589d5f13e77121305323c09992e7135a2c5d17fce37962a7a8f49e6e |
| AMD64        | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex.so     | 2020/11/4  | 770a9442cbcf22493f17fe8c51a59788988cb58e4c905a8210ddd295916a90ce |
| AARCH64      | Linux (Ubuntu)   | ELF64      | Viewer         | libreaderex.so     | 2021/3/8   | 578aea58600a9cfe506dc93ee1e9c238fa4d8633db3f6dd1b1972d879b37e9d1 |
| AMD64        | Windows          | PE64       | Express        | ReaderEx_x64.dll   | 2022/12/20 | e3874cfab8348f046ce0bf60431dfe13d1d6d032033afb6600224166a2c14b23 |
| AARCH64      | MacOS            | Mach-O FAT | Express 0.2.31 | libreaderex.dylib  | 2022/12/20 | b9290dfc0be9e5672798cfa9febf4d92f8f47219c5801e9c122b14d44257376f |
| AMD64        | MacOS            | Mach-O FAT | Express 0.2.31 | libreaderex.dylib  | 2022/12/20 | 38231e962cf6c2ca2ef9cf15d163e03af8f68908c7b4643987fb348c9d1506de |

The Windows version of the library (PE format) is basically a useless one because the export table of the DLL is stripped (it seems that the developers of the library has a debug file). But the linux version of the library (which is ELF format) still has the export table, so we can use it to analyze this library.