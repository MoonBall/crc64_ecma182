cmake_minimum_required(VERSION 2.8.8 FATAL_ERROR)
cmake_policy(VERSION 2.8.8)
project(crc64_ecma182)
set(configuration "Release")
enable_language(ASM)
set(builddir "${CMAKE_CURRENT_BINARY_DIR}")
set(obj "${builddir}/obj")

set(CMAKE_C_OUTPUT_EXTENSION_REPLACE 1)
set(CMAKE_CXX_OUTPUT_EXTENSION_REPLACE 1)



#binding.gyp:crc64_ecma182_base#target
set(TARGET "crc64_ecma182_base")
set(TOOLSET "target")
set(crc64_ecma182_base__cxx_srcs "../../src/crc64_ecma_182.cc")
add_library(crc64_ecma182_base STATIC ${crc64_ecma182_base__cxx_srcs})
set_target_properties(crc64_ecma182_base PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(crc64_ecma182_base PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(crc64_ecma182_base PROPERTIES PREFIX "")
set_target_properties(crc64_ecma182_base PROPERTIES ARCHIVE_OUTPUT_NAME "crc64_ecma182_base")
set_target_properties(crc64_ecma182_base PROPERTIES SUFFIX ".a")
set_source_files_properties(${builddir}/crc64_ecma182_base.a PROPERTIES GENERATED "TRUE")
list(APPEND crc64_ecma182_base__include_dirs
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/include/node"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/src"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/openssl/config"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/openssl/openssl/include"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/uv/include"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/zlib"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/v8/include")
set_property(TARGET crc64_ecma182_base APPEND PROPERTY INCLUDE_DIRECTORIES ${crc64_ecma182_base__include_dirs})
set_target_properties(crc64_ecma182_base PROPERTIES COMPILE_DEFINITIONS "NODE_GYP_MODULE_NAME=crc64_ecma182_base;USING_UV_SHARED=1;USING_V8_SHARED=1;V8_DEPRECATION_WARNINGS=1;V8_DEPRECATION_WARNINGS;V8_IMMINENT_DEPRECATION_WARNINGS;_GLIBCXX_USE_CXX11_ABI=1;_DARWIN_USE_64_BIT_INODE=1;_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;OPENSSL_NO_PINSHARED;OPENSSL_THREADS;")
set_target_properties(crc64_ecma182_base PROPERTIES COMPILE_FLAGS "-O3 -gdwarf-2 -mmacosx-version-min=10.15 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++17 -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing ")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_DYLIB_INSTALL_NAME_BASE "@rpath")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.15")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_ARCHS "arm64 ")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++17")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(crc64_ecma182_base PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "3")
unset(TOOLSET)
unset(TARGET)

#binding.gyp:crc64_ecma182#target
set(TARGET "crc64_ecma182")
set(TOOLSET "target")
set(crc64_ecma182__cxx_srcs "../../src/node_crc64_ecma_182.cc")
add_library(crc64_ecma182 MODULE ${crc64_ecma182__cxx_srcs})
set_target_properties(crc64_ecma182 PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(crc64_ecma182 PROPERTIES LIBRARY_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(crc64_ecma182 PROPERTIES PREFIX "")
set_target_properties(crc64_ecma182 PROPERTIES LIBRARY_OUTPUT_NAME "crc64_ecma182")
set_target_properties(crc64_ecma182 PROPERTIES SUFFIX ".node")
set_source_files_properties(${builddir}/crc64_ecma182.node PROPERTIES GENERATED "TRUE")
list(APPEND crc64_ecma182__include_dirs
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/include/node"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/src"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/openssl/config"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/openssl/openssl/include"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/uv/include"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/zlib"
  "/Users/bytedance/Library/Caches/node-gyp/18.19.1/deps/v8/include"
  "${CMAKE_CURRENT_LIST_DIR}/../../node_modules/nan")
set_property(TARGET crc64_ecma182 APPEND PROPERTY INCLUDE_DIRECTORIES ${crc64_ecma182__include_dirs})
set_target_properties(crc64_ecma182 PROPERTIES COMPILE_DEFINITIONS "NODE_GYP_MODULE_NAME=crc64_ecma182;USING_UV_SHARED=1;USING_V8_SHARED=1;V8_DEPRECATION_WARNINGS=1;V8_DEPRECATION_WARNINGS;V8_IMMINENT_DEPRECATION_WARNINGS;_GLIBCXX_USE_CXX11_ABI=1;_DARWIN_USE_64_BIT_INODE=1;_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;OPENSSL_NO_PINSHARED;OPENSSL_THREADS;BUILDING_NODE_EXTENSION;")
set_target_properties(crc64_ecma182 PROPERTIES COMPILE_FLAGS "-O3 -gdwarf-2 -mmacosx-version-min=10.15 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++17 -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing ")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_DYLIB_INSTALL_NAME_BASE "@rpath")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.15")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_ARCHS "arm64 ")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++17")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-undefined dynamic_lookup -Wl,-search_paths_first ")
set_target_properties(crc64_ecma182 PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "3")
target_link_libraries(crc64_ecma182
  crc64_ecma182_base
)
unset(TOOLSET)
unset(TARGET)
