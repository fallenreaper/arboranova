
import mysql.connector
from typing import List, Union

DOCKER_DB_DEFINITIONS = {
        "user": "mysql",
        "password": "password",
        "host": "0.0.0.0",
        "port": 3306,
        "database": "evesde"
    }

class Connection:
    __connection: Union[ mysql.connector.CMySQLConnection, None ] = None

    def connect(self, opts):
        try:
            self.__connection = mysql.connector.connect(**opts)
        except:
            print("Failed to Connect")
            self.__connection = None
        return self.__connection

    def __init__(self ):
        self.connect(DOCKER_DB_DEFINITIONS)
        if self.__connection is None:
            print("Failed to Connect.")
            return self.__connection

    def query(self, query_string: str) -> List:
        try:
            # self.__connection.prepare_for_mysql
            self.__connection.cmd_query(query_string)
            results, eof_p = self.__connection.get_rows()
            return [r for r in results]
        except AttributeError as e:
            print("Error", e)
            raise e

    def select(self, query_string: str) -> List:
        pass

    def insert(self, query_string: str) -> List:
        pass

    def delete(self, query_string: str) -> List:
        pass

    def check_database(self):
        try:
            return self.query("select DATABASE();")
        except AttributeError as e:
            print("Error", e)
            raise e

    def is_active_connect(self) -> bool:
        return self.__connection.is_connected()


def main() -> Union[mysql.connector.CMySQLConnection, None]:
    return Connection()

def test(c: Connection) -> Union[ List, None ]:
    if c is None:
        return []
    try:
        valid = c.check_database()
    except AttributeError as e:
        valid = None
    return valid


if __name__ == "__main__":
    print("Connection Attempt")
    c = main()
    print(test(c))
