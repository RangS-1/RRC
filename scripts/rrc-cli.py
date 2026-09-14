import os
from colorama import Fore
from pathlib import Path as pt

home_dir = pt.home() / ".rrc"

def install():
    if home_dir.exists():
        success()
        print(f".rrc directory on {home_dir} exists.")
    else:
        failed()
        print(f".rrc directory on {home_dir} does not exist!")
        check()
        update = input("Would you like to install it? (y/n): ")
        if update.lower() == 'y':
            home_dir.mkdir(parents=True, exist_ok=True)
            success()
            print(f".rrc directory created at {home_dir}.")
            os.system("git clone https://github.com/RangS-1/rrc.git ~/.rrc")
        else:
            failed()
            print("Installation Skipped...")

def update():
    print(f".rrc directory updated at {home_dir}.")
    os.system("rm -rf ~/.rrc && git clone https://github.com/RangS-1/rrc.git ~/.rrc")

def list():
    exclude_folder = '.git'

    for dirpath, dirnames, filenames in os.walk(home_dir):
        dirnames[:] = [d for d in dirnames if d != exclude_folder]

        for dirname in dirnames:
            print(os.path.join(dirpath, dirname))


def check():
    print(Fore.YELLOW, "[!]", Fore.BLUE, end="")

def success():
    print(Fore.GREEN, "[✓]", Fore.BLUE, end="")

def failed():
    print(Fore.RED, "[X]", Fore.BLUE, end="")

def main():
    while True:
        check()
        choose_templates = input(f"rrc_cli> {Fore.WHITE}")
        if choose_templates == "list":
            list()
        elif choose_templates == "install":
            install()
        elif choose_templates == "update":
            update()
        elif choose_templates == "exit":
            success()
            print("See You Soon!")
            break

if __name__ == "__main__":
    main()