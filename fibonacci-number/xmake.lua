add_rules("mode.debug", "mode.release")
add_requires("gtest")
set_languages("c17", "cxx20")
target("ibonacci-number-test")
set_kind("binary")
add_files("index.ixx")
add_files("test.cpp")
add_packages("gtest")
set_group("test")
set_default(false)
target_end()
