
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model boards
 * 
 */
export type boards = $Result.DefaultSelection<Prisma.$boardsPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model meeting_comments
 * 
 */
export type meeting_comments = $Result.DefaultSelection<Prisma.$meeting_commentsPayload>
/**
 * Model meeting_room
 * 
 */
export type meeting_room = $Result.DefaultSelection<Prisma.$meeting_roomPayload>
/**
 * Model meeting_schedule
 * 
 */
export type meeting_schedule = $Result.DefaultSelection<Prisma.$meeting_schedulePayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Boards
 * const boards = await prisma.boards.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Boards
   * const boards = await prisma.boards.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.boards`: Exposes CRUD operations for the **boards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.boards.findMany()
    * ```
    */
  get boards(): Prisma.boardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting_comments`: Exposes CRUD operations for the **meeting_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meeting_comments
    * const meeting_comments = await prisma.meeting_comments.findMany()
    * ```
    */
  get meeting_comments(): Prisma.meeting_commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting_room`: Exposes CRUD operations for the **meeting_room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meeting_rooms
    * const meeting_rooms = await prisma.meeting_room.findMany()
    * ```
    */
  get meeting_room(): Prisma.meeting_roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting_schedule`: Exposes CRUD operations for the **meeting_schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meeting_schedules
    * const meeting_schedules = await prisma.meeting_schedule.findMany()
    * ```
    */
  get meeting_schedule(): Prisma.meeting_scheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    boards: 'boards',
    comments: 'comments',
    meeting_comments: 'meeting_comments',
    meeting_room: 'meeting_room',
    meeting_schedule: 'meeting_schedule',
    notifications: 'notifications',
    tasks: 'tasks',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "boards" | "comments" | "meeting_comments" | "meeting_room" | "meeting_schedule" | "notifications" | "tasks" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      boards: {
        payload: Prisma.$boardsPayload<ExtArgs>
        fields: Prisma.boardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.boardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.boardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          findFirst: {
            args: Prisma.boardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.boardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          findMany: {
            args: Prisma.boardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>[]
          }
          create: {
            args: Prisma.boardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          createMany: {
            args: Prisma.boardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.boardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>[]
          }
          delete: {
            args: Prisma.boardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          update: {
            args: Prisma.boardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          deleteMany: {
            args: Prisma.boardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.boardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.boardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>[]
          }
          upsert: {
            args: Prisma.boardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          aggregate: {
            args: Prisma.BoardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoards>
          }
          groupBy: {
            args: Prisma.boardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.boardsCountArgs<ExtArgs>
            result: $Utils.Optional<BoardsCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      meeting_comments: {
        payload: Prisma.$meeting_commentsPayload<ExtArgs>
        fields: Prisma.meeting_commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meeting_commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meeting_commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>
          }
          findFirst: {
            args: Prisma.meeting_commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meeting_commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>
          }
          findMany: {
            args: Prisma.meeting_commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>[]
          }
          create: {
            args: Prisma.meeting_commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>
          }
          createMany: {
            args: Prisma.meeting_commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.meeting_commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>[]
          }
          delete: {
            args: Prisma.meeting_commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>
          }
          update: {
            args: Prisma.meeting_commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>
          }
          deleteMany: {
            args: Prisma.meeting_commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meeting_commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.meeting_commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>[]
          }
          upsert: {
            args: Prisma.meeting_commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_commentsPayload>
          }
          aggregate: {
            args: Prisma.Meeting_commentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting_comments>
          }
          groupBy: {
            args: Prisma.meeting_commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meeting_commentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.meeting_commentsCountArgs<ExtArgs>
            result: $Utils.Optional<Meeting_commentsCountAggregateOutputType> | number
          }
        }
      }
      meeting_room: {
        payload: Prisma.$meeting_roomPayload<ExtArgs>
        fields: Prisma.meeting_roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meeting_roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meeting_roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>
          }
          findFirst: {
            args: Prisma.meeting_roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meeting_roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>
          }
          findMany: {
            args: Prisma.meeting_roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>[]
          }
          create: {
            args: Prisma.meeting_roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>
          }
          createMany: {
            args: Prisma.meeting_roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.meeting_roomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>[]
          }
          delete: {
            args: Prisma.meeting_roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>
          }
          update: {
            args: Prisma.meeting_roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>
          }
          deleteMany: {
            args: Prisma.meeting_roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meeting_roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.meeting_roomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>[]
          }
          upsert: {
            args: Prisma.meeting_roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_roomPayload>
          }
          aggregate: {
            args: Prisma.Meeting_roomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting_room>
          }
          groupBy: {
            args: Prisma.meeting_roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meeting_roomGroupByOutputType>[]
          }
          count: {
            args: Prisma.meeting_roomCountArgs<ExtArgs>
            result: $Utils.Optional<Meeting_roomCountAggregateOutputType> | number
          }
        }
      }
      meeting_schedule: {
        payload: Prisma.$meeting_schedulePayload<ExtArgs>
        fields: Prisma.meeting_scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meeting_scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meeting_scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>
          }
          findFirst: {
            args: Prisma.meeting_scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meeting_scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>
          }
          findMany: {
            args: Prisma.meeting_scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>[]
          }
          create: {
            args: Prisma.meeting_scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>
          }
          createMany: {
            args: Prisma.meeting_scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.meeting_scheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>[]
          }
          delete: {
            args: Prisma.meeting_scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>
          }
          update: {
            args: Prisma.meeting_scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>
          }
          deleteMany: {
            args: Prisma.meeting_scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meeting_scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.meeting_scheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>[]
          }
          upsert: {
            args: Prisma.meeting_scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meeting_schedulePayload>
          }
          aggregate: {
            args: Prisma.Meeting_scheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting_schedule>
          }
          groupBy: {
            args: Prisma.meeting_scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meeting_scheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.meeting_scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<Meeting_scheduleCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    boards?: boardsOmit
    comments?: commentsOmit
    meeting_comments?: meeting_commentsOmit
    meeting_room?: meeting_roomOmit
    meeting_schedule?: meeting_scheduleOmit
    notifications?: notificationsOmit
    tasks?: tasksOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoardsCountOutputType
   */

  export type BoardsCountOutputType = {
    tasks: number
  }

  export type BoardsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | BoardsCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardsCountOutputType
     */
    select?: BoardsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type Meeting_roomCountOutputType
   */

  export type Meeting_roomCountOutputType = {
    meeting_schedule: number
  }

  export type Meeting_roomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_schedule?: boolean | Meeting_roomCountOutputTypeCountMeeting_scheduleArgs
  }

  // Custom InputTypes
  /**
   * Meeting_roomCountOutputType without action
   */
  export type Meeting_roomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_roomCountOutputType
     */
    select?: Meeting_roomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Meeting_roomCountOutputType without action
   */
  export type Meeting_roomCountOutputTypeCountMeeting_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meeting_scheduleWhereInput
  }


  /**
   * Count Type Meeting_scheduleCountOutputType
   */

  export type Meeting_scheduleCountOutputType = {
    meeting_comments: number
  }

  export type Meeting_scheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_comments?: boolean | Meeting_scheduleCountOutputTypeCountMeeting_commentsArgs
  }

  // Custom InputTypes
  /**
   * Meeting_scheduleCountOutputType without action
   */
  export type Meeting_scheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting_scheduleCountOutputType
     */
    select?: Meeting_scheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Meeting_scheduleCountOutputType without action
   */
  export type Meeting_scheduleCountOutputTypeCountMeeting_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meeting_commentsWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    comments: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TasksCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    boards: number
    comments: number
    meeting_comments: number
    notifications: number
    tasks_tasks_assigned_toTousers: number
    tasks_tasks_created_byTousers: number
    tasks_tasks_updated_byTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | UsersCountOutputTypeCountBoardsArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    meeting_comments?: boolean | UsersCountOutputTypeCountMeeting_commentsArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    tasks_tasks_assigned_toTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_assigned_toTousersArgs
    tasks_tasks_created_byTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_created_byTousersArgs
    tasks_tasks_updated_byTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_updated_byTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMeeting_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meeting_commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_assigned_toTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model boards
   */

  export type AggregateBoards = {
    _count: BoardsCountAggregateOutputType | null
    _avg: BoardsAvgAggregateOutputType | null
    _sum: BoardsSumAggregateOutputType | null
    _min: BoardsMinAggregateOutputType | null
    _max: BoardsMaxAggregateOutputType | null
  }

  export type BoardsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type BoardsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type BoardsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_by: number | null
    created_at: Date | null
  }

  export type BoardsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_by: number | null
    created_at: Date | null
  }

  export type BoardsCountAggregateOutputType = {
    id: number
    name: number
    created_by: number
    created_at: number
    _all: number
  }


  export type BoardsAvgAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type BoardsSumAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type BoardsMinAggregateInputType = {
    id?: true
    name?: true
    created_by?: true
    created_at?: true
  }

  export type BoardsMaxAggregateInputType = {
    id?: true
    name?: true
    created_by?: true
    created_at?: true
  }

  export type BoardsCountAggregateInputType = {
    id?: true
    name?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type BoardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boards to aggregate.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boards
    **/
    _count?: true | BoardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardsMaxAggregateInputType
  }

  export type GetBoardsAggregateType<T extends BoardsAggregateArgs> = {
        [P in keyof T & keyof AggregateBoards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoards[P]>
      : GetScalarType<T[P], AggregateBoards[P]>
  }




  export type boardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardsWhereInput
    orderBy?: boardsOrderByWithAggregationInput | boardsOrderByWithAggregationInput[]
    by: BoardsScalarFieldEnum[] | BoardsScalarFieldEnum
    having?: boardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardsCountAggregateInputType | true
    _avg?: BoardsAvgAggregateInputType
    _sum?: BoardsSumAggregateInputType
    _min?: BoardsMinAggregateInputType
    _max?: BoardsMaxAggregateInputType
  }

  export type BoardsGroupByOutputType = {
    id: number
    name: string
    created_by: number | null
    created_at: Date | null
    _count: BoardsCountAggregateOutputType | null
    _avg: BoardsAvgAggregateOutputType | null
    _sum: BoardsSumAggregateOutputType | null
    _min: BoardsMinAggregateOutputType | null
    _max: BoardsMaxAggregateOutputType | null
  }

  type GetBoardsGroupByPayload<T extends boardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardsGroupByOutputType[P]>
            : GetScalarType<T[P], BoardsGroupByOutputType[P]>
        }
      >
    >


  export type boardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | boards$usersArgs<ExtArgs>
    tasks?: boolean | boards$tasksArgs<ExtArgs>
    _count?: boolean | BoardsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type boardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | boards$usersArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type boardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | boards$usersArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type boardsSelectScalar = {
    id?: boolean
    name?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type boardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_by" | "created_at", ExtArgs["result"]["boards"]>
  export type boardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | boards$usersArgs<ExtArgs>
    tasks?: boolean | boards$tasksArgs<ExtArgs>
    _count?: boolean | BoardsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type boardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | boards$usersArgs<ExtArgs>
  }
  export type boardsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | boards$usersArgs<ExtArgs>
  }

  export type $boardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "boards"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_by: number | null
      created_at: Date | null
    }, ExtArgs["result"]["boards"]>
    composites: {}
  }

  type boardsGetPayload<S extends boolean | null | undefined | boardsDefaultArgs> = $Result.GetResult<Prisma.$boardsPayload, S>

  type boardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<boardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardsCountAggregateInputType | true
    }

  export interface boardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['boards'], meta: { name: 'boards' } }
    /**
     * Find zero or one Boards that matches the filter.
     * @param {boardsFindUniqueArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends boardsFindUniqueArgs>(args: SelectSubset<T, boardsFindUniqueArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {boardsFindUniqueOrThrowArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends boardsFindUniqueOrThrowArgs>(args: SelectSubset<T, boardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsFindFirstArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends boardsFindFirstArgs>(args?: SelectSubset<T, boardsFindFirstArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsFindFirstOrThrowArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends boardsFindFirstOrThrowArgs>(args?: SelectSubset<T, boardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.boards.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.boards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardsWithIdOnly = await prisma.boards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends boardsFindManyArgs>(args?: SelectSubset<T, boardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boards.
     * @param {boardsCreateArgs} args - Arguments to create a Boards.
     * @example
     * // Create one Boards
     * const Boards = await prisma.boards.create({
     *   data: {
     *     // ... data to create a Boards
     *   }
     * })
     * 
     */
    create<T extends boardsCreateArgs>(args: SelectSubset<T, boardsCreateArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {boardsCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const boards = await prisma.boards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends boardsCreateManyArgs>(args?: SelectSubset<T, boardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {boardsCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const boards = await prisma.boards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardsWithIdOnly = await prisma.boards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends boardsCreateManyAndReturnArgs>(args?: SelectSubset<T, boardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boards.
     * @param {boardsDeleteArgs} args - Arguments to delete one Boards.
     * @example
     * // Delete one Boards
     * const Boards = await prisma.boards.delete({
     *   where: {
     *     // ... filter to delete one Boards
     *   }
     * })
     * 
     */
    delete<T extends boardsDeleteArgs>(args: SelectSubset<T, boardsDeleteArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boards.
     * @param {boardsUpdateArgs} args - Arguments to update one Boards.
     * @example
     * // Update one Boards
     * const boards = await prisma.boards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends boardsUpdateArgs>(args: SelectSubset<T, boardsUpdateArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {boardsDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.boards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends boardsDeleteManyArgs>(args?: SelectSubset<T, boardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const boards = await prisma.boards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends boardsUpdateManyArgs>(args: SelectSubset<T, boardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {boardsUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const boards = await prisma.boards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardsWithIdOnly = await prisma.boards.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends boardsUpdateManyAndReturnArgs>(args: SelectSubset<T, boardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boards.
     * @param {boardsUpsertArgs} args - Arguments to update or create a Boards.
     * @example
     * // Update or create a Boards
     * const boards = await prisma.boards.upsert({
     *   create: {
     *     // ... data to create a Boards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boards we want to update
     *   }
     * })
     */
    upsert<T extends boardsUpsertArgs>(args: SelectSubset<T, boardsUpsertArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.boards.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends boardsCountArgs>(
      args?: Subset<T, boardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardsAggregateArgs>(args: Subset<T, BoardsAggregateArgs>): Prisma.PrismaPromise<GetBoardsAggregateType<T>>

    /**
     * Group by Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends boardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: boardsGroupByArgs['orderBy'] }
        : { orderBy?: boardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, boardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the boards model
   */
  readonly fields: boardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for boards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__boardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends boards$usersArgs<ExtArgs> = {}>(args?: Subset<T, boards$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends boards$tasksArgs<ExtArgs> = {}>(args?: Subset<T, boards$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the boards model
   */
  interface boardsFieldRefs {
    readonly id: FieldRef<"boards", 'Int'>
    readonly name: FieldRef<"boards", 'String'>
    readonly created_by: FieldRef<"boards", 'Int'>
    readonly created_at: FieldRef<"boards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * boards findUnique
   */
  export type boardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards findUniqueOrThrow
   */
  export type boardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards findFirst
   */
  export type boardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boards.
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * boards findFirstOrThrow
   */
  export type boardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boards.
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * boards findMany
   */
  export type boardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boards.
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * boards create
   */
  export type boardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * The data needed to create a boards.
     */
    data: XOR<boardsCreateInput, boardsUncheckedCreateInput>
  }

  /**
   * boards createMany
   */
  export type boardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many boards.
     */
    data: boardsCreateManyInput | boardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * boards createManyAndReturn
   */
  export type boardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * The data used to create many boards.
     */
    data: boardsCreateManyInput | boardsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * boards update
   */
  export type boardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * The data needed to update a boards.
     */
    data: XOR<boardsUpdateInput, boardsUncheckedUpdateInput>
    /**
     * Choose, which boards to update.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards updateMany
   */
  export type boardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update boards.
     */
    data: XOR<boardsUpdateManyMutationInput, boardsUncheckedUpdateManyInput>
    /**
     * Filter which boards to update
     */
    where?: boardsWhereInput
    /**
     * Limit how many boards to update.
     */
    limit?: number
  }

  /**
   * boards updateManyAndReturn
   */
  export type boardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * The data used to update boards.
     */
    data: XOR<boardsUpdateManyMutationInput, boardsUncheckedUpdateManyInput>
    /**
     * Filter which boards to update
     */
    where?: boardsWhereInput
    /**
     * Limit how many boards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * boards upsert
   */
  export type boardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * The filter to search for the boards to update in case it exists.
     */
    where: boardsWhereUniqueInput
    /**
     * In case the boards found by the `where` argument doesn't exist, create a new boards with this data.
     */
    create: XOR<boardsCreateInput, boardsUncheckedCreateInput>
    /**
     * In case the boards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boardsUpdateInput, boardsUncheckedUpdateInput>
  }

  /**
   * boards delete
   */
  export type boardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter which boards to delete.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards deleteMany
   */
  export type boardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boards to delete
     */
    where?: boardsWhereInput
    /**
     * Limit how many boards to delete.
     */
    limit?: number
  }

  /**
   * boards.users
   */
  export type boards$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * boards.tasks
   */
  export type boards$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * boards without action
   */
  export type boardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
    comment: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
    comment: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    task_id: number
    user_id: number
    comment: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
    comment?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
    comment?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    task_id: number | null
    user_id: number | null
    comment: string
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    comment?: boolean
    created_at?: boolean
    tasks?: boolean | comments$tasksArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    comment?: boolean
    created_at?: boolean
    tasks?: boolean | comments$tasksArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    comment?: boolean
    created_at?: boolean
    tasks?: boolean | comments$tasksArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "user_id" | "comment" | "created_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | comments$tasksArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | comments$tasksArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | comments$tasksArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      tasks: Prisma.$tasksPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: number | null
      user_id: number | null
      comment: string
      created_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends comments$tasksArgs<ExtArgs> = {}>(args?: Subset<T, comments$tasksArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly task_id: FieldRef<"comments", 'Int'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly comment: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.tasks
   */
  export type comments$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
  }

  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model meeting_comments
   */

  export type AggregateMeeting_comments = {
    _count: Meeting_commentsCountAggregateOutputType | null
    _avg: Meeting_commentsAvgAggregateOutputType | null
    _sum: Meeting_commentsSumAggregateOutputType | null
    _min: Meeting_commentsMinAggregateOutputType | null
    _max: Meeting_commentsMaxAggregateOutputType | null
  }

  export type Meeting_commentsAvgAggregateOutputType = {
    id: number | null
    meeting_schedule_id: number | null
    user_id: number | null
  }

  export type Meeting_commentsSumAggregateOutputType = {
    id: number | null
    meeting_schedule_id: number | null
    user_id: number | null
  }

  export type Meeting_commentsMinAggregateOutputType = {
    id: number | null
    meeting_schedule_id: number | null
    user_id: number | null
    comment: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type Meeting_commentsMaxAggregateOutputType = {
    id: number | null
    meeting_schedule_id: number | null
    user_id: number | null
    comment: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type Meeting_commentsCountAggregateOutputType = {
    id: number
    meeting_schedule_id: number
    user_id: number
    comment: number
    image_url: number
    created_at: number
    _all: number
  }


  export type Meeting_commentsAvgAggregateInputType = {
    id?: true
    meeting_schedule_id?: true
    user_id?: true
  }

  export type Meeting_commentsSumAggregateInputType = {
    id?: true
    meeting_schedule_id?: true
    user_id?: true
  }

  export type Meeting_commentsMinAggregateInputType = {
    id?: true
    meeting_schedule_id?: true
    user_id?: true
    comment?: true
    image_url?: true
    created_at?: true
  }

  export type Meeting_commentsMaxAggregateInputType = {
    id?: true
    meeting_schedule_id?: true
    user_id?: true
    comment?: true
    image_url?: true
    created_at?: true
  }

  export type Meeting_commentsCountAggregateInputType = {
    id?: true
    meeting_schedule_id?: true
    user_id?: true
    comment?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type Meeting_commentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting_comments to aggregate.
     */
    where?: meeting_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_comments to fetch.
     */
    orderBy?: meeting_commentsOrderByWithRelationInput | meeting_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meeting_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meeting_comments
    **/
    _count?: true | Meeting_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meeting_commentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meeting_commentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meeting_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meeting_commentsMaxAggregateInputType
  }

  export type GetMeeting_commentsAggregateType<T extends Meeting_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting_comments[P]>
      : GetScalarType<T[P], AggregateMeeting_comments[P]>
  }




  export type meeting_commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meeting_commentsWhereInput
    orderBy?: meeting_commentsOrderByWithAggregationInput | meeting_commentsOrderByWithAggregationInput[]
    by: Meeting_commentsScalarFieldEnum[] | Meeting_commentsScalarFieldEnum
    having?: meeting_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meeting_commentsCountAggregateInputType | true
    _avg?: Meeting_commentsAvgAggregateInputType
    _sum?: Meeting_commentsSumAggregateInputType
    _min?: Meeting_commentsMinAggregateInputType
    _max?: Meeting_commentsMaxAggregateInputType
  }

  export type Meeting_commentsGroupByOutputType = {
    id: number
    meeting_schedule_id: number | null
    user_id: number | null
    comment: string
    image_url: string | null
    created_at: Date | null
    _count: Meeting_commentsCountAggregateOutputType | null
    _avg: Meeting_commentsAvgAggregateOutputType | null
    _sum: Meeting_commentsSumAggregateOutputType | null
    _min: Meeting_commentsMinAggregateOutputType | null
    _max: Meeting_commentsMaxAggregateOutputType | null
  }

  type GetMeeting_commentsGroupByPayload<T extends meeting_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meeting_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meeting_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meeting_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Meeting_commentsGroupByOutputType[P]>
        }
      >
    >


  export type meeting_commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_schedule_id?: boolean
    user_id?: boolean
    comment?: boolean
    image_url?: boolean
    created_at?: boolean
    meeting_schedule?: boolean | meeting_comments$meeting_scheduleArgs<ExtArgs>
    users?: boolean | meeting_comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_comments"]>

  export type meeting_commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_schedule_id?: boolean
    user_id?: boolean
    comment?: boolean
    image_url?: boolean
    created_at?: boolean
    meeting_schedule?: boolean | meeting_comments$meeting_scheduleArgs<ExtArgs>
    users?: boolean | meeting_comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_comments"]>

  export type meeting_commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_schedule_id?: boolean
    user_id?: boolean
    comment?: boolean
    image_url?: boolean
    created_at?: boolean
    meeting_schedule?: boolean | meeting_comments$meeting_scheduleArgs<ExtArgs>
    users?: boolean | meeting_comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_comments"]>

  export type meeting_commentsSelectScalar = {
    id?: boolean
    meeting_schedule_id?: boolean
    user_id?: boolean
    comment?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type meeting_commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meeting_schedule_id" | "user_id" | "comment" | "image_url" | "created_at", ExtArgs["result"]["meeting_comments"]>
  export type meeting_commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_schedule?: boolean | meeting_comments$meeting_scheduleArgs<ExtArgs>
    users?: boolean | meeting_comments$usersArgs<ExtArgs>
  }
  export type meeting_commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_schedule?: boolean | meeting_comments$meeting_scheduleArgs<ExtArgs>
    users?: boolean | meeting_comments$usersArgs<ExtArgs>
  }
  export type meeting_commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_schedule?: boolean | meeting_comments$meeting_scheduleArgs<ExtArgs>
    users?: boolean | meeting_comments$usersArgs<ExtArgs>
  }

  export type $meeting_commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meeting_comments"
    objects: {
      meeting_schedule: Prisma.$meeting_schedulePayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meeting_schedule_id: number | null
      user_id: number | null
      comment: string
      image_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["meeting_comments"]>
    composites: {}
  }

  type meeting_commentsGetPayload<S extends boolean | null | undefined | meeting_commentsDefaultArgs> = $Result.GetResult<Prisma.$meeting_commentsPayload, S>

  type meeting_commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meeting_commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meeting_commentsCountAggregateInputType | true
    }

  export interface meeting_commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meeting_comments'], meta: { name: 'meeting_comments' } }
    /**
     * Find zero or one Meeting_comments that matches the filter.
     * @param {meeting_commentsFindUniqueArgs} args - Arguments to find a Meeting_comments
     * @example
     * // Get one Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meeting_commentsFindUniqueArgs>(args: SelectSubset<T, meeting_commentsFindUniqueArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting_comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meeting_commentsFindUniqueOrThrowArgs} args - Arguments to find a Meeting_comments
     * @example
     * // Get one Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meeting_commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, meeting_commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_commentsFindFirstArgs} args - Arguments to find a Meeting_comments
     * @example
     * // Get one Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meeting_commentsFindFirstArgs>(args?: SelectSubset<T, meeting_commentsFindFirstArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_commentsFindFirstOrThrowArgs} args - Arguments to find a Meeting_comments
     * @example
     * // Get one Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meeting_commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, meeting_commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meeting_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.findMany()
     * 
     * // Get first 10 Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meeting_commentsWithIdOnly = await prisma.meeting_comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meeting_commentsFindManyArgs>(args?: SelectSubset<T, meeting_commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting_comments.
     * @param {meeting_commentsCreateArgs} args - Arguments to create a Meeting_comments.
     * @example
     * // Create one Meeting_comments
     * const Meeting_comments = await prisma.meeting_comments.create({
     *   data: {
     *     // ... data to create a Meeting_comments
     *   }
     * })
     * 
     */
    create<T extends meeting_commentsCreateArgs>(args: SelectSubset<T, meeting_commentsCreateArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meeting_comments.
     * @param {meeting_commentsCreateManyArgs} args - Arguments to create many Meeting_comments.
     * @example
     * // Create many Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meeting_commentsCreateManyArgs>(args?: SelectSubset<T, meeting_commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meeting_comments and returns the data saved in the database.
     * @param {meeting_commentsCreateManyAndReturnArgs} args - Arguments to create many Meeting_comments.
     * @example
     * // Create many Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meeting_comments and only return the `id`
     * const meeting_commentsWithIdOnly = await prisma.meeting_comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends meeting_commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, meeting_commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting_comments.
     * @param {meeting_commentsDeleteArgs} args - Arguments to delete one Meeting_comments.
     * @example
     * // Delete one Meeting_comments
     * const Meeting_comments = await prisma.meeting_comments.delete({
     *   where: {
     *     // ... filter to delete one Meeting_comments
     *   }
     * })
     * 
     */
    delete<T extends meeting_commentsDeleteArgs>(args: SelectSubset<T, meeting_commentsDeleteArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting_comments.
     * @param {meeting_commentsUpdateArgs} args - Arguments to update one Meeting_comments.
     * @example
     * // Update one Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meeting_commentsUpdateArgs>(args: SelectSubset<T, meeting_commentsUpdateArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meeting_comments.
     * @param {meeting_commentsDeleteManyArgs} args - Arguments to filter Meeting_comments to delete.
     * @example
     * // Delete a few Meeting_comments
     * const { count } = await prisma.meeting_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meeting_commentsDeleteManyArgs>(args?: SelectSubset<T, meeting_commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meeting_commentsUpdateManyArgs>(args: SelectSubset<T, meeting_commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_comments and returns the data updated in the database.
     * @param {meeting_commentsUpdateManyAndReturnArgs} args - Arguments to update many Meeting_comments.
     * @example
     * // Update many Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meeting_comments and only return the `id`
     * const meeting_commentsWithIdOnly = await prisma.meeting_comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends meeting_commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, meeting_commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting_comments.
     * @param {meeting_commentsUpsertArgs} args - Arguments to update or create a Meeting_comments.
     * @example
     * // Update or create a Meeting_comments
     * const meeting_comments = await prisma.meeting_comments.upsert({
     *   create: {
     *     // ... data to create a Meeting_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting_comments we want to update
     *   }
     * })
     */
    upsert<T extends meeting_commentsUpsertArgs>(args: SelectSubset<T, meeting_commentsUpsertArgs<ExtArgs>>): Prisma__meeting_commentsClient<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meeting_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_commentsCountArgs} args - Arguments to filter Meeting_comments to count.
     * @example
     * // Count the number of Meeting_comments
     * const count = await prisma.meeting_comments.count({
     *   where: {
     *     // ... the filter for the Meeting_comments we want to count
     *   }
     * })
    **/
    count<T extends meeting_commentsCountArgs>(
      args?: Subset<T, meeting_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meeting_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meeting_commentsAggregateArgs>(args: Subset<T, Meeting_commentsAggregateArgs>): Prisma.PrismaPromise<GetMeeting_commentsAggregateType<T>>

    /**
     * Group by Meeting_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meeting_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meeting_commentsGroupByArgs['orderBy'] }
        : { orderBy?: meeting_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meeting_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeeting_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meeting_comments model
   */
  readonly fields: meeting_commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meeting_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meeting_commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting_schedule<T extends meeting_comments$meeting_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, meeting_comments$meeting_scheduleArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends meeting_comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, meeting_comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meeting_comments model
   */
  interface meeting_commentsFieldRefs {
    readonly id: FieldRef<"meeting_comments", 'Int'>
    readonly meeting_schedule_id: FieldRef<"meeting_comments", 'Int'>
    readonly user_id: FieldRef<"meeting_comments", 'Int'>
    readonly comment: FieldRef<"meeting_comments", 'String'>
    readonly image_url: FieldRef<"meeting_comments", 'String'>
    readonly created_at: FieldRef<"meeting_comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meeting_comments findUnique
   */
  export type meeting_commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * Filter, which meeting_comments to fetch.
     */
    where: meeting_commentsWhereUniqueInput
  }

  /**
   * meeting_comments findUniqueOrThrow
   */
  export type meeting_commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * Filter, which meeting_comments to fetch.
     */
    where: meeting_commentsWhereUniqueInput
  }

  /**
   * meeting_comments findFirst
   */
  export type meeting_commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * Filter, which meeting_comments to fetch.
     */
    where?: meeting_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_comments to fetch.
     */
    orderBy?: meeting_commentsOrderByWithRelationInput | meeting_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meeting_comments.
     */
    cursor?: meeting_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_comments.
     */
    distinct?: Meeting_commentsScalarFieldEnum | Meeting_commentsScalarFieldEnum[]
  }

  /**
   * meeting_comments findFirstOrThrow
   */
  export type meeting_commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * Filter, which meeting_comments to fetch.
     */
    where?: meeting_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_comments to fetch.
     */
    orderBy?: meeting_commentsOrderByWithRelationInput | meeting_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meeting_comments.
     */
    cursor?: meeting_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_comments.
     */
    distinct?: Meeting_commentsScalarFieldEnum | Meeting_commentsScalarFieldEnum[]
  }

  /**
   * meeting_comments findMany
   */
  export type meeting_commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * Filter, which meeting_comments to fetch.
     */
    where?: meeting_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_comments to fetch.
     */
    orderBy?: meeting_commentsOrderByWithRelationInput | meeting_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meeting_comments.
     */
    cursor?: meeting_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_comments.
     */
    distinct?: Meeting_commentsScalarFieldEnum | Meeting_commentsScalarFieldEnum[]
  }

  /**
   * meeting_comments create
   */
  export type meeting_commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a meeting_comments.
     */
    data: XOR<meeting_commentsCreateInput, meeting_commentsUncheckedCreateInput>
  }

  /**
   * meeting_comments createMany
   */
  export type meeting_commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meeting_comments.
     */
    data: meeting_commentsCreateManyInput | meeting_commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meeting_comments createManyAndReturn
   */
  export type meeting_commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * The data used to create many meeting_comments.
     */
    data: meeting_commentsCreateManyInput | meeting_commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * meeting_comments update
   */
  export type meeting_commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a meeting_comments.
     */
    data: XOR<meeting_commentsUpdateInput, meeting_commentsUncheckedUpdateInput>
    /**
     * Choose, which meeting_comments to update.
     */
    where: meeting_commentsWhereUniqueInput
  }

  /**
   * meeting_comments updateMany
   */
  export type meeting_commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meeting_comments.
     */
    data: XOR<meeting_commentsUpdateManyMutationInput, meeting_commentsUncheckedUpdateManyInput>
    /**
     * Filter which meeting_comments to update
     */
    where?: meeting_commentsWhereInput
    /**
     * Limit how many meeting_comments to update.
     */
    limit?: number
  }

  /**
   * meeting_comments updateManyAndReturn
   */
  export type meeting_commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * The data used to update meeting_comments.
     */
    data: XOR<meeting_commentsUpdateManyMutationInput, meeting_commentsUncheckedUpdateManyInput>
    /**
     * Filter which meeting_comments to update
     */
    where?: meeting_commentsWhereInput
    /**
     * Limit how many meeting_comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * meeting_comments upsert
   */
  export type meeting_commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the meeting_comments to update in case it exists.
     */
    where: meeting_commentsWhereUniqueInput
    /**
     * In case the meeting_comments found by the `where` argument doesn't exist, create a new meeting_comments with this data.
     */
    create: XOR<meeting_commentsCreateInput, meeting_commentsUncheckedCreateInput>
    /**
     * In case the meeting_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meeting_commentsUpdateInput, meeting_commentsUncheckedUpdateInput>
  }

  /**
   * meeting_comments delete
   */
  export type meeting_commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    /**
     * Filter which meeting_comments to delete.
     */
    where: meeting_commentsWhereUniqueInput
  }

  /**
   * meeting_comments deleteMany
   */
  export type meeting_commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting_comments to delete
     */
    where?: meeting_commentsWhereInput
    /**
     * Limit how many meeting_comments to delete.
     */
    limit?: number
  }

  /**
   * meeting_comments.meeting_schedule
   */
  export type meeting_comments$meeting_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    where?: meeting_scheduleWhereInput
  }

  /**
   * meeting_comments.users
   */
  export type meeting_comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * meeting_comments without action
   */
  export type meeting_commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
  }


  /**
   * Model meeting_room
   */

  export type AggregateMeeting_room = {
    _count: Meeting_roomCountAggregateOutputType | null
    _avg: Meeting_roomAvgAggregateOutputType | null
    _sum: Meeting_roomSumAggregateOutputType | null
    _min: Meeting_roomMinAggregateOutputType | null
    _max: Meeting_roomMaxAggregateOutputType | null
  }

  export type Meeting_roomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type Meeting_roomSumAggregateOutputType = {
    capacity: number | null
  }

  export type Meeting_roomMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
    password: string | null
  }

  export type Meeting_roomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
    password: string | null
  }

  export type Meeting_roomCountAggregateOutputType = {
    id: number
    name: number
    location: number
    capacity: number
    password: number
    _all: number
  }


  export type Meeting_roomAvgAggregateInputType = {
    capacity?: true
  }

  export type Meeting_roomSumAggregateInputType = {
    capacity?: true
  }

  export type Meeting_roomMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    password?: true
  }

  export type Meeting_roomMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    password?: true
  }

  export type Meeting_roomCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    password?: true
    _all?: true
  }

  export type Meeting_roomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting_room to aggregate.
     */
    where?: meeting_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_rooms to fetch.
     */
    orderBy?: meeting_roomOrderByWithRelationInput | meeting_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meeting_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meeting_rooms
    **/
    _count?: true | Meeting_roomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meeting_roomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meeting_roomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meeting_roomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meeting_roomMaxAggregateInputType
  }

  export type GetMeeting_roomAggregateType<T extends Meeting_roomAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting_room]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting_room[P]>
      : GetScalarType<T[P], AggregateMeeting_room[P]>
  }




  export type meeting_roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meeting_roomWhereInput
    orderBy?: meeting_roomOrderByWithAggregationInput | meeting_roomOrderByWithAggregationInput[]
    by: Meeting_roomScalarFieldEnum[] | Meeting_roomScalarFieldEnum
    having?: meeting_roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meeting_roomCountAggregateInputType | true
    _avg?: Meeting_roomAvgAggregateInputType
    _sum?: Meeting_roomSumAggregateInputType
    _min?: Meeting_roomMinAggregateInputType
    _max?: Meeting_roomMaxAggregateInputType
  }

  export type Meeting_roomGroupByOutputType = {
    id: string
    name: string
    location: string | null
    capacity: number | null
    password: string | null
    _count: Meeting_roomCountAggregateOutputType | null
    _avg: Meeting_roomAvgAggregateOutputType | null
    _sum: Meeting_roomSumAggregateOutputType | null
    _min: Meeting_roomMinAggregateOutputType | null
    _max: Meeting_roomMaxAggregateOutputType | null
  }

  type GetMeeting_roomGroupByPayload<T extends meeting_roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meeting_roomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meeting_roomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meeting_roomGroupByOutputType[P]>
            : GetScalarType<T[P], Meeting_roomGroupByOutputType[P]>
        }
      >
    >


  export type meeting_roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    password?: boolean
    meeting_schedule?: boolean | meeting_room$meeting_scheduleArgs<ExtArgs>
    _count?: boolean | Meeting_roomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_room"]>

  export type meeting_roomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    password?: boolean
  }, ExtArgs["result"]["meeting_room"]>

  export type meeting_roomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    password?: boolean
  }, ExtArgs["result"]["meeting_room"]>

  export type meeting_roomSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    password?: boolean
  }

  export type meeting_roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "capacity" | "password", ExtArgs["result"]["meeting_room"]>
  export type meeting_roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_schedule?: boolean | meeting_room$meeting_scheduleArgs<ExtArgs>
    _count?: boolean | Meeting_roomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type meeting_roomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type meeting_roomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $meeting_roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meeting_room"
    objects: {
      meeting_schedule: Prisma.$meeting_schedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
      capacity: number | null
      password: string | null
    }, ExtArgs["result"]["meeting_room"]>
    composites: {}
  }

  type meeting_roomGetPayload<S extends boolean | null | undefined | meeting_roomDefaultArgs> = $Result.GetResult<Prisma.$meeting_roomPayload, S>

  type meeting_roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meeting_roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meeting_roomCountAggregateInputType | true
    }

  export interface meeting_roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meeting_room'], meta: { name: 'meeting_room' } }
    /**
     * Find zero or one Meeting_room that matches the filter.
     * @param {meeting_roomFindUniqueArgs} args - Arguments to find a Meeting_room
     * @example
     * // Get one Meeting_room
     * const meeting_room = await prisma.meeting_room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meeting_roomFindUniqueArgs>(args: SelectSubset<T, meeting_roomFindUniqueArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting_room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meeting_roomFindUniqueOrThrowArgs} args - Arguments to find a Meeting_room
     * @example
     * // Get one Meeting_room
     * const meeting_room = await prisma.meeting_room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meeting_roomFindUniqueOrThrowArgs>(args: SelectSubset<T, meeting_roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_roomFindFirstArgs} args - Arguments to find a Meeting_room
     * @example
     * // Get one Meeting_room
     * const meeting_room = await prisma.meeting_room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meeting_roomFindFirstArgs>(args?: SelectSubset<T, meeting_roomFindFirstArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_roomFindFirstOrThrowArgs} args - Arguments to find a Meeting_room
     * @example
     * // Get one Meeting_room
     * const meeting_room = await prisma.meeting_room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meeting_roomFindFirstOrThrowArgs>(args?: SelectSubset<T, meeting_roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meeting_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meeting_rooms
     * const meeting_rooms = await prisma.meeting_room.findMany()
     * 
     * // Get first 10 Meeting_rooms
     * const meeting_rooms = await prisma.meeting_room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meeting_roomWithIdOnly = await prisma.meeting_room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meeting_roomFindManyArgs>(args?: SelectSubset<T, meeting_roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting_room.
     * @param {meeting_roomCreateArgs} args - Arguments to create a Meeting_room.
     * @example
     * // Create one Meeting_room
     * const Meeting_room = await prisma.meeting_room.create({
     *   data: {
     *     // ... data to create a Meeting_room
     *   }
     * })
     * 
     */
    create<T extends meeting_roomCreateArgs>(args: SelectSubset<T, meeting_roomCreateArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meeting_rooms.
     * @param {meeting_roomCreateManyArgs} args - Arguments to create many Meeting_rooms.
     * @example
     * // Create many Meeting_rooms
     * const meeting_room = await prisma.meeting_room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meeting_roomCreateManyArgs>(args?: SelectSubset<T, meeting_roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meeting_rooms and returns the data saved in the database.
     * @param {meeting_roomCreateManyAndReturnArgs} args - Arguments to create many Meeting_rooms.
     * @example
     * // Create many Meeting_rooms
     * const meeting_room = await prisma.meeting_room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meeting_rooms and only return the `id`
     * const meeting_roomWithIdOnly = await prisma.meeting_room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends meeting_roomCreateManyAndReturnArgs>(args?: SelectSubset<T, meeting_roomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting_room.
     * @param {meeting_roomDeleteArgs} args - Arguments to delete one Meeting_room.
     * @example
     * // Delete one Meeting_room
     * const Meeting_room = await prisma.meeting_room.delete({
     *   where: {
     *     // ... filter to delete one Meeting_room
     *   }
     * })
     * 
     */
    delete<T extends meeting_roomDeleteArgs>(args: SelectSubset<T, meeting_roomDeleteArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting_room.
     * @param {meeting_roomUpdateArgs} args - Arguments to update one Meeting_room.
     * @example
     * // Update one Meeting_room
     * const meeting_room = await prisma.meeting_room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meeting_roomUpdateArgs>(args: SelectSubset<T, meeting_roomUpdateArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meeting_rooms.
     * @param {meeting_roomDeleteManyArgs} args - Arguments to filter Meeting_rooms to delete.
     * @example
     * // Delete a few Meeting_rooms
     * const { count } = await prisma.meeting_room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meeting_roomDeleteManyArgs>(args?: SelectSubset<T, meeting_roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meeting_rooms
     * const meeting_room = await prisma.meeting_room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meeting_roomUpdateManyArgs>(args: SelectSubset<T, meeting_roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_rooms and returns the data updated in the database.
     * @param {meeting_roomUpdateManyAndReturnArgs} args - Arguments to update many Meeting_rooms.
     * @example
     * // Update many Meeting_rooms
     * const meeting_room = await prisma.meeting_room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meeting_rooms and only return the `id`
     * const meeting_roomWithIdOnly = await prisma.meeting_room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends meeting_roomUpdateManyAndReturnArgs>(args: SelectSubset<T, meeting_roomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting_room.
     * @param {meeting_roomUpsertArgs} args - Arguments to update or create a Meeting_room.
     * @example
     * // Update or create a Meeting_room
     * const meeting_room = await prisma.meeting_room.upsert({
     *   create: {
     *     // ... data to create a Meeting_room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting_room we want to update
     *   }
     * })
     */
    upsert<T extends meeting_roomUpsertArgs>(args: SelectSubset<T, meeting_roomUpsertArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meeting_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_roomCountArgs} args - Arguments to filter Meeting_rooms to count.
     * @example
     * // Count the number of Meeting_rooms
     * const count = await prisma.meeting_room.count({
     *   where: {
     *     // ... the filter for the Meeting_rooms we want to count
     *   }
     * })
    **/
    count<T extends meeting_roomCountArgs>(
      args?: Subset<T, meeting_roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meeting_roomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_roomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meeting_roomAggregateArgs>(args: Subset<T, Meeting_roomAggregateArgs>): Prisma.PrismaPromise<GetMeeting_roomAggregateType<T>>

    /**
     * Group by Meeting_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_roomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meeting_roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meeting_roomGroupByArgs['orderBy'] }
        : { orderBy?: meeting_roomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meeting_roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeeting_roomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meeting_room model
   */
  readonly fields: meeting_roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meeting_room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meeting_roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting_schedule<T extends meeting_room$meeting_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, meeting_room$meeting_scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meeting_room model
   */
  interface meeting_roomFieldRefs {
    readonly id: FieldRef<"meeting_room", 'String'>
    readonly name: FieldRef<"meeting_room", 'String'>
    readonly location: FieldRef<"meeting_room", 'String'>
    readonly capacity: FieldRef<"meeting_room", 'Int'>
    readonly password: FieldRef<"meeting_room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * meeting_room findUnique
   */
  export type meeting_roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * Filter, which meeting_room to fetch.
     */
    where: meeting_roomWhereUniqueInput
  }

  /**
   * meeting_room findUniqueOrThrow
   */
  export type meeting_roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * Filter, which meeting_room to fetch.
     */
    where: meeting_roomWhereUniqueInput
  }

  /**
   * meeting_room findFirst
   */
  export type meeting_roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * Filter, which meeting_room to fetch.
     */
    where?: meeting_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_rooms to fetch.
     */
    orderBy?: meeting_roomOrderByWithRelationInput | meeting_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meeting_rooms.
     */
    cursor?: meeting_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_rooms.
     */
    distinct?: Meeting_roomScalarFieldEnum | Meeting_roomScalarFieldEnum[]
  }

  /**
   * meeting_room findFirstOrThrow
   */
  export type meeting_roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * Filter, which meeting_room to fetch.
     */
    where?: meeting_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_rooms to fetch.
     */
    orderBy?: meeting_roomOrderByWithRelationInput | meeting_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meeting_rooms.
     */
    cursor?: meeting_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_rooms.
     */
    distinct?: Meeting_roomScalarFieldEnum | Meeting_roomScalarFieldEnum[]
  }

  /**
   * meeting_room findMany
   */
  export type meeting_roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * Filter, which meeting_rooms to fetch.
     */
    where?: meeting_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_rooms to fetch.
     */
    orderBy?: meeting_roomOrderByWithRelationInput | meeting_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meeting_rooms.
     */
    cursor?: meeting_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_rooms.
     */
    distinct?: Meeting_roomScalarFieldEnum | Meeting_roomScalarFieldEnum[]
  }

  /**
   * meeting_room create
   */
  export type meeting_roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * The data needed to create a meeting_room.
     */
    data: XOR<meeting_roomCreateInput, meeting_roomUncheckedCreateInput>
  }

  /**
   * meeting_room createMany
   */
  export type meeting_roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meeting_rooms.
     */
    data: meeting_roomCreateManyInput | meeting_roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meeting_room createManyAndReturn
   */
  export type meeting_roomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * The data used to create many meeting_rooms.
     */
    data: meeting_roomCreateManyInput | meeting_roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meeting_room update
   */
  export type meeting_roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * The data needed to update a meeting_room.
     */
    data: XOR<meeting_roomUpdateInput, meeting_roomUncheckedUpdateInput>
    /**
     * Choose, which meeting_room to update.
     */
    where: meeting_roomWhereUniqueInput
  }

  /**
   * meeting_room updateMany
   */
  export type meeting_roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meeting_rooms.
     */
    data: XOR<meeting_roomUpdateManyMutationInput, meeting_roomUncheckedUpdateManyInput>
    /**
     * Filter which meeting_rooms to update
     */
    where?: meeting_roomWhereInput
    /**
     * Limit how many meeting_rooms to update.
     */
    limit?: number
  }

  /**
   * meeting_room updateManyAndReturn
   */
  export type meeting_roomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * The data used to update meeting_rooms.
     */
    data: XOR<meeting_roomUpdateManyMutationInput, meeting_roomUncheckedUpdateManyInput>
    /**
     * Filter which meeting_rooms to update
     */
    where?: meeting_roomWhereInput
    /**
     * Limit how many meeting_rooms to update.
     */
    limit?: number
  }

  /**
   * meeting_room upsert
   */
  export type meeting_roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * The filter to search for the meeting_room to update in case it exists.
     */
    where: meeting_roomWhereUniqueInput
    /**
     * In case the meeting_room found by the `where` argument doesn't exist, create a new meeting_room with this data.
     */
    create: XOR<meeting_roomCreateInput, meeting_roomUncheckedCreateInput>
    /**
     * In case the meeting_room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meeting_roomUpdateInput, meeting_roomUncheckedUpdateInput>
  }

  /**
   * meeting_room delete
   */
  export type meeting_roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    /**
     * Filter which meeting_room to delete.
     */
    where: meeting_roomWhereUniqueInput
  }

  /**
   * meeting_room deleteMany
   */
  export type meeting_roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting_rooms to delete
     */
    where?: meeting_roomWhereInput
    /**
     * Limit how many meeting_rooms to delete.
     */
    limit?: number
  }

  /**
   * meeting_room.meeting_schedule
   */
  export type meeting_room$meeting_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    where?: meeting_scheduleWhereInput
    orderBy?: meeting_scheduleOrderByWithRelationInput | meeting_scheduleOrderByWithRelationInput[]
    cursor?: meeting_scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meeting_scheduleScalarFieldEnum | Meeting_scheduleScalarFieldEnum[]
  }

  /**
   * meeting_room without action
   */
  export type meeting_roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
  }


  /**
   * Model meeting_schedule
   */

  export type AggregateMeeting_schedule = {
    _count: Meeting_scheduleCountAggregateOutputType | null
    _avg: Meeting_scheduleAvgAggregateOutputType | null
    _sum: Meeting_scheduleSumAggregateOutputType | null
    _min: Meeting_scheduleMinAggregateOutputType | null
    _max: Meeting_scheduleMaxAggregateOutputType | null
  }

  export type Meeting_scheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type Meeting_scheduleSumAggregateOutputType = {
    id: number | null
  }

  export type Meeting_scheduleMinAggregateOutputType = {
    id: number | null
    meeting_room_id: string | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Meeting_scheduleMaxAggregateOutputType = {
    id: number | null
    meeting_room_id: string | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Meeting_scheduleCountAggregateOutputType = {
    id: number
    meeting_room_id: number
    start_time: number
    end_time: number
    _all: number
  }


  export type Meeting_scheduleAvgAggregateInputType = {
    id?: true
  }

  export type Meeting_scheduleSumAggregateInputType = {
    id?: true
  }

  export type Meeting_scheduleMinAggregateInputType = {
    id?: true
    meeting_room_id?: true
    start_time?: true
    end_time?: true
  }

  export type Meeting_scheduleMaxAggregateInputType = {
    id?: true
    meeting_room_id?: true
    start_time?: true
    end_time?: true
  }

  export type Meeting_scheduleCountAggregateInputType = {
    id?: true
    meeting_room_id?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type Meeting_scheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting_schedule to aggregate.
     */
    where?: meeting_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_schedules to fetch.
     */
    orderBy?: meeting_scheduleOrderByWithRelationInput | meeting_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meeting_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meeting_schedules
    **/
    _count?: true | Meeting_scheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meeting_scheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meeting_scheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meeting_scheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meeting_scheduleMaxAggregateInputType
  }

  export type GetMeeting_scheduleAggregateType<T extends Meeting_scheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting_schedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting_schedule[P]>
      : GetScalarType<T[P], AggregateMeeting_schedule[P]>
  }




  export type meeting_scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meeting_scheduleWhereInput
    orderBy?: meeting_scheduleOrderByWithAggregationInput | meeting_scheduleOrderByWithAggregationInput[]
    by: Meeting_scheduleScalarFieldEnum[] | Meeting_scheduleScalarFieldEnum
    having?: meeting_scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meeting_scheduleCountAggregateInputType | true
    _avg?: Meeting_scheduleAvgAggregateInputType
    _sum?: Meeting_scheduleSumAggregateInputType
    _min?: Meeting_scheduleMinAggregateInputType
    _max?: Meeting_scheduleMaxAggregateInputType
  }

  export type Meeting_scheduleGroupByOutputType = {
    id: number
    meeting_room_id: string | null
    start_time: Date
    end_time: Date
    _count: Meeting_scheduleCountAggregateOutputType | null
    _avg: Meeting_scheduleAvgAggregateOutputType | null
    _sum: Meeting_scheduleSumAggregateOutputType | null
    _min: Meeting_scheduleMinAggregateOutputType | null
    _max: Meeting_scheduleMaxAggregateOutputType | null
  }

  type GetMeeting_scheduleGroupByPayload<T extends meeting_scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meeting_scheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meeting_scheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meeting_scheduleGroupByOutputType[P]>
            : GetScalarType<T[P], Meeting_scheduleGroupByOutputType[P]>
        }
      >
    >


  export type meeting_scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_room_id?: boolean
    start_time?: boolean
    end_time?: boolean
    meeting_comments?: boolean | meeting_schedule$meeting_commentsArgs<ExtArgs>
    meeting_room?: boolean | meeting_schedule$meeting_roomArgs<ExtArgs>
    _count?: boolean | Meeting_scheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_schedule"]>

  export type meeting_scheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_room_id?: boolean
    start_time?: boolean
    end_time?: boolean
    meeting_room?: boolean | meeting_schedule$meeting_roomArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_schedule"]>

  export type meeting_scheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_room_id?: boolean
    start_time?: boolean
    end_time?: boolean
    meeting_room?: boolean | meeting_schedule$meeting_roomArgs<ExtArgs>
  }, ExtArgs["result"]["meeting_schedule"]>

  export type meeting_scheduleSelectScalar = {
    id?: boolean
    meeting_room_id?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type meeting_scheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meeting_room_id" | "start_time" | "end_time", ExtArgs["result"]["meeting_schedule"]>
  export type meeting_scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_comments?: boolean | meeting_schedule$meeting_commentsArgs<ExtArgs>
    meeting_room?: boolean | meeting_schedule$meeting_roomArgs<ExtArgs>
    _count?: boolean | Meeting_scheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type meeting_scheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_room?: boolean | meeting_schedule$meeting_roomArgs<ExtArgs>
  }
  export type meeting_scheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting_room?: boolean | meeting_schedule$meeting_roomArgs<ExtArgs>
  }

  export type $meeting_schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meeting_schedule"
    objects: {
      meeting_comments: Prisma.$meeting_commentsPayload<ExtArgs>[]
      meeting_room: Prisma.$meeting_roomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meeting_room_id: string | null
      start_time: Date
      end_time: Date
    }, ExtArgs["result"]["meeting_schedule"]>
    composites: {}
  }

  type meeting_scheduleGetPayload<S extends boolean | null | undefined | meeting_scheduleDefaultArgs> = $Result.GetResult<Prisma.$meeting_schedulePayload, S>

  type meeting_scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meeting_scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meeting_scheduleCountAggregateInputType | true
    }

  export interface meeting_scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meeting_schedule'], meta: { name: 'meeting_schedule' } }
    /**
     * Find zero or one Meeting_schedule that matches the filter.
     * @param {meeting_scheduleFindUniqueArgs} args - Arguments to find a Meeting_schedule
     * @example
     * // Get one Meeting_schedule
     * const meeting_schedule = await prisma.meeting_schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meeting_scheduleFindUniqueArgs>(args: SelectSubset<T, meeting_scheduleFindUniqueArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting_schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meeting_scheduleFindUniqueOrThrowArgs} args - Arguments to find a Meeting_schedule
     * @example
     * // Get one Meeting_schedule
     * const meeting_schedule = await prisma.meeting_schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meeting_scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, meeting_scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_scheduleFindFirstArgs} args - Arguments to find a Meeting_schedule
     * @example
     * // Get one Meeting_schedule
     * const meeting_schedule = await prisma.meeting_schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meeting_scheduleFindFirstArgs>(args?: SelectSubset<T, meeting_scheduleFindFirstArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting_schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_scheduleFindFirstOrThrowArgs} args - Arguments to find a Meeting_schedule
     * @example
     * // Get one Meeting_schedule
     * const meeting_schedule = await prisma.meeting_schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meeting_scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, meeting_scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meeting_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meeting_schedules
     * const meeting_schedules = await prisma.meeting_schedule.findMany()
     * 
     * // Get first 10 Meeting_schedules
     * const meeting_schedules = await prisma.meeting_schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meeting_scheduleWithIdOnly = await prisma.meeting_schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meeting_scheduleFindManyArgs>(args?: SelectSubset<T, meeting_scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting_schedule.
     * @param {meeting_scheduleCreateArgs} args - Arguments to create a Meeting_schedule.
     * @example
     * // Create one Meeting_schedule
     * const Meeting_schedule = await prisma.meeting_schedule.create({
     *   data: {
     *     // ... data to create a Meeting_schedule
     *   }
     * })
     * 
     */
    create<T extends meeting_scheduleCreateArgs>(args: SelectSubset<T, meeting_scheduleCreateArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meeting_schedules.
     * @param {meeting_scheduleCreateManyArgs} args - Arguments to create many Meeting_schedules.
     * @example
     * // Create many Meeting_schedules
     * const meeting_schedule = await prisma.meeting_schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meeting_scheduleCreateManyArgs>(args?: SelectSubset<T, meeting_scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meeting_schedules and returns the data saved in the database.
     * @param {meeting_scheduleCreateManyAndReturnArgs} args - Arguments to create many Meeting_schedules.
     * @example
     * // Create many Meeting_schedules
     * const meeting_schedule = await prisma.meeting_schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meeting_schedules and only return the `id`
     * const meeting_scheduleWithIdOnly = await prisma.meeting_schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends meeting_scheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, meeting_scheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting_schedule.
     * @param {meeting_scheduleDeleteArgs} args - Arguments to delete one Meeting_schedule.
     * @example
     * // Delete one Meeting_schedule
     * const Meeting_schedule = await prisma.meeting_schedule.delete({
     *   where: {
     *     // ... filter to delete one Meeting_schedule
     *   }
     * })
     * 
     */
    delete<T extends meeting_scheduleDeleteArgs>(args: SelectSubset<T, meeting_scheduleDeleteArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting_schedule.
     * @param {meeting_scheduleUpdateArgs} args - Arguments to update one Meeting_schedule.
     * @example
     * // Update one Meeting_schedule
     * const meeting_schedule = await prisma.meeting_schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meeting_scheduleUpdateArgs>(args: SelectSubset<T, meeting_scheduleUpdateArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meeting_schedules.
     * @param {meeting_scheduleDeleteManyArgs} args - Arguments to filter Meeting_schedules to delete.
     * @example
     * // Delete a few Meeting_schedules
     * const { count } = await prisma.meeting_schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meeting_scheduleDeleteManyArgs>(args?: SelectSubset<T, meeting_scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meeting_schedules
     * const meeting_schedule = await prisma.meeting_schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meeting_scheduleUpdateManyArgs>(args: SelectSubset<T, meeting_scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meeting_schedules and returns the data updated in the database.
     * @param {meeting_scheduleUpdateManyAndReturnArgs} args - Arguments to update many Meeting_schedules.
     * @example
     * // Update many Meeting_schedules
     * const meeting_schedule = await prisma.meeting_schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meeting_schedules and only return the `id`
     * const meeting_scheduleWithIdOnly = await prisma.meeting_schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends meeting_scheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, meeting_scheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting_schedule.
     * @param {meeting_scheduleUpsertArgs} args - Arguments to update or create a Meeting_schedule.
     * @example
     * // Update or create a Meeting_schedule
     * const meeting_schedule = await prisma.meeting_schedule.upsert({
     *   create: {
     *     // ... data to create a Meeting_schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting_schedule we want to update
     *   }
     * })
     */
    upsert<T extends meeting_scheduleUpsertArgs>(args: SelectSubset<T, meeting_scheduleUpsertArgs<ExtArgs>>): Prisma__meeting_scheduleClient<$Result.GetResult<Prisma.$meeting_schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meeting_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_scheduleCountArgs} args - Arguments to filter Meeting_schedules to count.
     * @example
     * // Count the number of Meeting_schedules
     * const count = await prisma.meeting_schedule.count({
     *   where: {
     *     // ... the filter for the Meeting_schedules we want to count
     *   }
     * })
    **/
    count<T extends meeting_scheduleCountArgs>(
      args?: Subset<T, meeting_scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meeting_scheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meeting_scheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meeting_scheduleAggregateArgs>(args: Subset<T, Meeting_scheduleAggregateArgs>): Prisma.PrismaPromise<GetMeeting_scheduleAggregateType<T>>

    /**
     * Group by Meeting_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meeting_scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meeting_scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meeting_scheduleGroupByArgs['orderBy'] }
        : { orderBy?: meeting_scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meeting_scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeeting_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meeting_schedule model
   */
  readonly fields: meeting_scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meeting_schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meeting_scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting_comments<T extends meeting_schedule$meeting_commentsArgs<ExtArgs> = {}>(args?: Subset<T, meeting_schedule$meeting_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meeting_room<T extends meeting_schedule$meeting_roomArgs<ExtArgs> = {}>(args?: Subset<T, meeting_schedule$meeting_roomArgs<ExtArgs>>): Prisma__meeting_roomClient<$Result.GetResult<Prisma.$meeting_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meeting_schedule model
   */
  interface meeting_scheduleFieldRefs {
    readonly id: FieldRef<"meeting_schedule", 'Int'>
    readonly meeting_room_id: FieldRef<"meeting_schedule", 'String'>
    readonly start_time: FieldRef<"meeting_schedule", 'DateTime'>
    readonly end_time: FieldRef<"meeting_schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meeting_schedule findUnique
   */
  export type meeting_scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which meeting_schedule to fetch.
     */
    where: meeting_scheduleWhereUniqueInput
  }

  /**
   * meeting_schedule findUniqueOrThrow
   */
  export type meeting_scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which meeting_schedule to fetch.
     */
    where: meeting_scheduleWhereUniqueInput
  }

  /**
   * meeting_schedule findFirst
   */
  export type meeting_scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which meeting_schedule to fetch.
     */
    where?: meeting_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_schedules to fetch.
     */
    orderBy?: meeting_scheduleOrderByWithRelationInput | meeting_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meeting_schedules.
     */
    cursor?: meeting_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_schedules.
     */
    distinct?: Meeting_scheduleScalarFieldEnum | Meeting_scheduleScalarFieldEnum[]
  }

  /**
   * meeting_schedule findFirstOrThrow
   */
  export type meeting_scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which meeting_schedule to fetch.
     */
    where?: meeting_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_schedules to fetch.
     */
    orderBy?: meeting_scheduleOrderByWithRelationInput | meeting_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meeting_schedules.
     */
    cursor?: meeting_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_schedules.
     */
    distinct?: Meeting_scheduleScalarFieldEnum | Meeting_scheduleScalarFieldEnum[]
  }

  /**
   * meeting_schedule findMany
   */
  export type meeting_scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which meeting_schedules to fetch.
     */
    where?: meeting_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meeting_schedules to fetch.
     */
    orderBy?: meeting_scheduleOrderByWithRelationInput | meeting_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meeting_schedules.
     */
    cursor?: meeting_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meeting_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meeting_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meeting_schedules.
     */
    distinct?: Meeting_scheduleScalarFieldEnum | Meeting_scheduleScalarFieldEnum[]
  }

  /**
   * meeting_schedule create
   */
  export type meeting_scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a meeting_schedule.
     */
    data: XOR<meeting_scheduleCreateInput, meeting_scheduleUncheckedCreateInput>
  }

  /**
   * meeting_schedule createMany
   */
  export type meeting_scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meeting_schedules.
     */
    data: meeting_scheduleCreateManyInput | meeting_scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meeting_schedule createManyAndReturn
   */
  export type meeting_scheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * The data used to create many meeting_schedules.
     */
    data: meeting_scheduleCreateManyInput | meeting_scheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * meeting_schedule update
   */
  export type meeting_scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a meeting_schedule.
     */
    data: XOR<meeting_scheduleUpdateInput, meeting_scheduleUncheckedUpdateInput>
    /**
     * Choose, which meeting_schedule to update.
     */
    where: meeting_scheduleWhereUniqueInput
  }

  /**
   * meeting_schedule updateMany
   */
  export type meeting_scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meeting_schedules.
     */
    data: XOR<meeting_scheduleUpdateManyMutationInput, meeting_scheduleUncheckedUpdateManyInput>
    /**
     * Filter which meeting_schedules to update
     */
    where?: meeting_scheduleWhereInput
    /**
     * Limit how many meeting_schedules to update.
     */
    limit?: number
  }

  /**
   * meeting_schedule updateManyAndReturn
   */
  export type meeting_scheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * The data used to update meeting_schedules.
     */
    data: XOR<meeting_scheduleUpdateManyMutationInput, meeting_scheduleUncheckedUpdateManyInput>
    /**
     * Filter which meeting_schedules to update
     */
    where?: meeting_scheduleWhereInput
    /**
     * Limit how many meeting_schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * meeting_schedule upsert
   */
  export type meeting_scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the meeting_schedule to update in case it exists.
     */
    where: meeting_scheduleWhereUniqueInput
    /**
     * In case the meeting_schedule found by the `where` argument doesn't exist, create a new meeting_schedule with this data.
     */
    create: XOR<meeting_scheduleCreateInput, meeting_scheduleUncheckedCreateInput>
    /**
     * In case the meeting_schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meeting_scheduleUpdateInput, meeting_scheduleUncheckedUpdateInput>
  }

  /**
   * meeting_schedule delete
   */
  export type meeting_scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
    /**
     * Filter which meeting_schedule to delete.
     */
    where: meeting_scheduleWhereUniqueInput
  }

  /**
   * meeting_schedule deleteMany
   */
  export type meeting_scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting_schedules to delete
     */
    where?: meeting_scheduleWhereInput
    /**
     * Limit how many meeting_schedules to delete.
     */
    limit?: number
  }

  /**
   * meeting_schedule.meeting_comments
   */
  export type meeting_schedule$meeting_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    where?: meeting_commentsWhereInput
    orderBy?: meeting_commentsOrderByWithRelationInput | meeting_commentsOrderByWithRelationInput[]
    cursor?: meeting_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meeting_commentsScalarFieldEnum | Meeting_commentsScalarFieldEnum[]
  }

  /**
   * meeting_schedule.meeting_room
   */
  export type meeting_schedule$meeting_roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_room
     */
    select?: meeting_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_room
     */
    omit?: meeting_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_roomInclude<ExtArgs> | null
    where?: meeting_roomWhereInput
  }

  /**
   * meeting_schedule without action
   */
  export type meeting_scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_schedule
     */
    select?: meeting_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_schedule
     */
    omit?: meeting_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_scheduleInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    message: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    message?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number | null
    message: string
    is_read: boolean | null
    created_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
    users?: boolean | notifications$usersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
    users?: boolean | notifications$usersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
    users?: boolean | notifications$usersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "message" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | notifications$usersArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | notifications$usersArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | notifications$usersArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      message: string
      is_read: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends notifications$usersArgs<ExtArgs> = {}>(args?: Subset<T, notifications$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly user_id: FieldRef<"notifications", 'Int'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications.users
   */
  export type notifications$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    board_id: number | null
    assigned_to: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: number | null
    board_id: number | null
    assigned_to: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: number | null
    board_id: number | null
    title: string | null
    description: string | null
    status: string | null
    due_date: Date | null
    assigned_to: number | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: number | null
    board_id: number | null
    title: string | null
    description: string | null
    status: string | null
    due_date: Date | null
    assigned_to: number | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    board_id: number
    title: number
    description: number
    status: number
    due_date: number
    assigned_to: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    board_id?: true
    assigned_to?: true
    created_by?: true
    updated_by?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    board_id?: true
    assigned_to?: true
    created_by?: true
    updated_by?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    board_id?: true
    title?: true
    description?: true
    status?: true
    due_date?: true
    assigned_to?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    board_id?: true
    title?: true
    description?: true
    status?: true
    due_date?: true
    assigned_to?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    board_id?: true
    title?: true
    description?: true
    status?: true
    due_date?: true
    assigned_to?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: number
    board_id: number | null
    title: string
    description: string | null
    status: string | null
    due_date: Date | null
    assigned_to: number | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    due_date?: boolean
    assigned_to?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    comments?: boolean | tasks$commentsArgs<ExtArgs>
    users_tasks_assigned_toTousers?: boolean | tasks$users_tasks_assigned_toTousersArgs<ExtArgs>
    boards?: boolean | tasks$boardsArgs<ExtArgs>
    users_tasks_created_byTousers?: boolean | tasks$users_tasks_created_byTousersArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    due_date?: boolean
    assigned_to?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_tasks_assigned_toTousers?: boolean | tasks$users_tasks_assigned_toTousersArgs<ExtArgs>
    boards?: boolean | tasks$boardsArgs<ExtArgs>
    users_tasks_created_byTousers?: boolean | tasks$users_tasks_created_byTousersArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    due_date?: boolean
    assigned_to?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_tasks_assigned_toTousers?: boolean | tasks$users_tasks_assigned_toTousersArgs<ExtArgs>
    boards?: boolean | tasks$boardsArgs<ExtArgs>
    users_tasks_created_byTousers?: boolean | tasks$users_tasks_created_byTousersArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    id?: boolean
    board_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    due_date?: boolean
    assigned_to?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "board_id" | "title" | "description" | "status" | "due_date" | "assigned_to" | "created_by" | "updated_by" | "created_at" | "updated_at", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | tasks$commentsArgs<ExtArgs>
    users_tasks_assigned_toTousers?: boolean | tasks$users_tasks_assigned_toTousersArgs<ExtArgs>
    boards?: boolean | tasks$boardsArgs<ExtArgs>
    users_tasks_created_byTousers?: boolean | tasks$users_tasks_created_byTousersArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_tasks_assigned_toTousers?: boolean | tasks$users_tasks_assigned_toTousersArgs<ExtArgs>
    boards?: boolean | tasks$boardsArgs<ExtArgs>
    users_tasks_created_byTousers?: boolean | tasks$users_tasks_created_byTousersArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
  }
  export type tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_tasks_assigned_toTousers?: boolean | tasks$users_tasks_assigned_toTousersArgs<ExtArgs>
    boards?: boolean | tasks$boardsArgs<ExtArgs>
    users_tasks_created_byTousers?: boolean | tasks$users_tasks_created_byTousersArgs<ExtArgs>
    users_tasks_updated_byTousers?: boolean | tasks$users_tasks_updated_byTousersArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      users_tasks_assigned_toTousers: Prisma.$usersPayload<ExtArgs> | null
      boards: Prisma.$boardsPayload<ExtArgs> | null
      users_tasks_created_byTousers: Prisma.$usersPayload<ExtArgs> | null
      users_tasks_updated_byTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      board_id: number | null
      title: string
      description: string | null
      status: string | null
      due_date: Date | null
      assigned_to: number | null
      created_by: number | null
      updated_by: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {tasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {tasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends tasks$commentsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_tasks_assigned_toTousers<T extends tasks$users_tasks_assigned_toTousersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$users_tasks_assigned_toTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    boards<T extends tasks$boardsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$boardsArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_tasks_created_byTousers<T extends tasks$users_tasks_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$users_tasks_created_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_tasks_updated_byTousers<T extends tasks$users_tasks_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$users_tasks_updated_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'Int'>
    readonly board_id: FieldRef<"tasks", 'Int'>
    readonly title: FieldRef<"tasks", 'String'>
    readonly description: FieldRef<"tasks", 'String'>
    readonly status: FieldRef<"tasks", 'String'>
    readonly due_date: FieldRef<"tasks", 'DateTime'>
    readonly assigned_to: FieldRef<"tasks", 'Int'>
    readonly created_by: FieldRef<"tasks", 'Int'>
    readonly updated_by: FieldRef<"tasks", 'Int'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks createManyAndReturn
   */
  export type tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks updateManyAndReturn
   */
  export type tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.comments
   */
  export type tasks$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * tasks.users_tasks_assigned_toTousers
   */
  export type tasks$users_tasks_assigned_toTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks.boards
   */
  export type tasks$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    where?: boardsWhereInput
  }

  /**
   * tasks.users_tasks_created_byTousers
   */
  export type tasks$users_tasks_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks.users_tasks_updated_byTousers
   */
  export type tasks$users_tasks_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    boards?: boolean | users$boardsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    meeting_comments?: boolean | users$meeting_commentsArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    tasks_tasks_assigned_toTousers?: boolean | users$tasks_tasks_assigned_toTousersArgs<ExtArgs>
    tasks_tasks_created_byTousers?: boolean | users$tasks_tasks_created_byTousersArgs<ExtArgs>
    tasks_tasks_updated_byTousers?: boolean | users$tasks_tasks_updated_byTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | users$boardsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    meeting_comments?: boolean | users$meeting_commentsArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    tasks_tasks_assigned_toTousers?: boolean | users$tasks_tasks_assigned_toTousersArgs<ExtArgs>
    tasks_tasks_created_byTousers?: boolean | users$tasks_tasks_created_byTousersArgs<ExtArgs>
    tasks_tasks_updated_byTousers?: boolean | users$tasks_tasks_updated_byTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      boards: Prisma.$boardsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      meeting_comments: Prisma.$meeting_commentsPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      tasks_tasks_assigned_toTousers: Prisma.$tasksPayload<ExtArgs>[]
      tasks_tasks_created_byTousers: Prisma.$tasksPayload<ExtArgs>[]
      tasks_tasks_updated_byTousers: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boards<T extends users$boardsArgs<ExtArgs> = {}>(args?: Subset<T, users$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meeting_comments<T extends users$meeting_commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$meeting_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meeting_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_assigned_toTousers<T extends users$tasks_tasks_assigned_toTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_assigned_toTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_created_byTousers<T extends users$tasks_tasks_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_updated_byTousers<T extends users$tasks_tasks_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.boards
   */
  export type users$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    where?: boardsWhereInput
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    cursor?: boardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.meeting_comments
   */
  export type users$meeting_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting_comments
     */
    select?: meeting_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting_comments
     */
    omit?: meeting_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meeting_commentsInclude<ExtArgs> | null
    where?: meeting_commentsWhereInput
    orderBy?: meeting_commentsOrderByWithRelationInput | meeting_commentsOrderByWithRelationInput[]
    cursor?: meeting_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meeting_commentsScalarFieldEnum | Meeting_commentsScalarFieldEnum[]
  }

  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_assigned_toTousers
   */
  export type users$tasks_tasks_assigned_toTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_created_byTousers
   */
  export type users$tasks_tasks_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_updated_byTousers
   */
  export type users$tasks_tasks_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoardsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type BoardsScalarFieldEnum = (typeof BoardsScalarFieldEnum)[keyof typeof BoardsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    user_id: 'user_id',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const Meeting_commentsScalarFieldEnum: {
    id: 'id',
    meeting_schedule_id: 'meeting_schedule_id',
    user_id: 'user_id',
    comment: 'comment',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type Meeting_commentsScalarFieldEnum = (typeof Meeting_commentsScalarFieldEnum)[keyof typeof Meeting_commentsScalarFieldEnum]


  export const Meeting_roomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    capacity: 'capacity',
    password: 'password'
  };

  export type Meeting_roomScalarFieldEnum = (typeof Meeting_roomScalarFieldEnum)[keyof typeof Meeting_roomScalarFieldEnum]


  export const Meeting_scheduleScalarFieldEnum: {
    id: 'id',
    meeting_room_id: 'meeting_room_id',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type Meeting_scheduleScalarFieldEnum = (typeof Meeting_scheduleScalarFieldEnum)[keyof typeof Meeting_scheduleScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    message: 'message',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    board_id: 'board_id',
    title: 'title',
    description: 'description',
    status: 'status',
    due_date: 'due_date',
    assigned_to: 'assigned_to',
    created_by: 'created_by',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type boardsWhereInput = {
    AND?: boardsWhereInput | boardsWhereInput[]
    OR?: boardsWhereInput[]
    NOT?: boardsWhereInput | boardsWhereInput[]
    id?: IntFilter<"boards"> | number
    name?: StringFilter<"boards"> | string
    created_by?: IntNullableFilter<"boards"> | number | null
    created_at?: DateTimeNullableFilter<"boards"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tasks?: TasksListRelationFilter
  }

  export type boardsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    tasks?: tasksOrderByRelationAggregateInput
  }

  export type boardsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: boardsWhereInput | boardsWhereInput[]
    OR?: boardsWhereInput[]
    NOT?: boardsWhereInput | boardsWhereInput[]
    name?: StringFilter<"boards"> | string
    created_by?: IntNullableFilter<"boards"> | number | null
    created_at?: DateTimeNullableFilter<"boards"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tasks?: TasksListRelationFilter
  }, "id">

  export type boardsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: boardsCountOrderByAggregateInput
    _avg?: boardsAvgOrderByAggregateInput
    _max?: boardsMaxOrderByAggregateInput
    _min?: boardsMinOrderByAggregateInput
    _sum?: boardsSumOrderByAggregateInput
  }

  export type boardsScalarWhereWithAggregatesInput = {
    AND?: boardsScalarWhereWithAggregatesInput | boardsScalarWhereWithAggregatesInput[]
    OR?: boardsScalarWhereWithAggregatesInput[]
    NOT?: boardsScalarWhereWithAggregatesInput | boardsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"boards"> | number
    name?: StringWithAggregatesFilter<"boards"> | string
    created_by?: IntNullableWithAggregatesFilter<"boards"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"boards"> | Date | string | null
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    task_id?: IntNullableFilter<"comments"> | number | null
    user_id?: IntNullableFilter<"comments"> | number | null
    comment?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    tasks?: XOR<TasksNullableScalarRelationFilter, tasksWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comment?: SortOrder
    created_at?: SortOrderInput | SortOrder
    tasks?: tasksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    task_id?: IntNullableFilter<"comments"> | number | null
    user_id?: IntNullableFilter<"comments"> | number | null
    comment?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    tasks?: XOR<TasksNullableScalarRelationFilter, tasksWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comment?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    task_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    comment?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type meeting_commentsWhereInput = {
    AND?: meeting_commentsWhereInput | meeting_commentsWhereInput[]
    OR?: meeting_commentsWhereInput[]
    NOT?: meeting_commentsWhereInput | meeting_commentsWhereInput[]
    id?: IntFilter<"meeting_comments"> | number
    meeting_schedule_id?: IntNullableFilter<"meeting_comments"> | number | null
    user_id?: IntNullableFilter<"meeting_comments"> | number | null
    comment?: StringFilter<"meeting_comments"> | string
    image_url?: StringNullableFilter<"meeting_comments"> | string | null
    created_at?: DateTimeNullableFilter<"meeting_comments"> | Date | string | null
    meeting_schedule?: XOR<Meeting_scheduleNullableScalarRelationFilter, meeting_scheduleWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type meeting_commentsOrderByWithRelationInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comment?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meeting_schedule?: meeting_scheduleOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type meeting_commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: meeting_commentsWhereInput | meeting_commentsWhereInput[]
    OR?: meeting_commentsWhereInput[]
    NOT?: meeting_commentsWhereInput | meeting_commentsWhereInput[]
    meeting_schedule_id?: IntNullableFilter<"meeting_comments"> | number | null
    user_id?: IntNullableFilter<"meeting_comments"> | number | null
    comment?: StringFilter<"meeting_comments"> | string
    image_url?: StringNullableFilter<"meeting_comments"> | string | null
    created_at?: DateTimeNullableFilter<"meeting_comments"> | Date | string | null
    meeting_schedule?: XOR<Meeting_scheduleNullableScalarRelationFilter, meeting_scheduleWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type meeting_commentsOrderByWithAggregationInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comment?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: meeting_commentsCountOrderByAggregateInput
    _avg?: meeting_commentsAvgOrderByAggregateInput
    _max?: meeting_commentsMaxOrderByAggregateInput
    _min?: meeting_commentsMinOrderByAggregateInput
    _sum?: meeting_commentsSumOrderByAggregateInput
  }

  export type meeting_commentsScalarWhereWithAggregatesInput = {
    AND?: meeting_commentsScalarWhereWithAggregatesInput | meeting_commentsScalarWhereWithAggregatesInput[]
    OR?: meeting_commentsScalarWhereWithAggregatesInput[]
    NOT?: meeting_commentsScalarWhereWithAggregatesInput | meeting_commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"meeting_comments"> | number
    meeting_schedule_id?: IntNullableWithAggregatesFilter<"meeting_comments"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"meeting_comments"> | number | null
    comment?: StringWithAggregatesFilter<"meeting_comments"> | string
    image_url?: StringNullableWithAggregatesFilter<"meeting_comments"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"meeting_comments"> | Date | string | null
  }

  export type meeting_roomWhereInput = {
    AND?: meeting_roomWhereInput | meeting_roomWhereInput[]
    OR?: meeting_roomWhereInput[]
    NOT?: meeting_roomWhereInput | meeting_roomWhereInput[]
    id?: StringFilter<"meeting_room"> | string
    name?: StringFilter<"meeting_room"> | string
    location?: StringNullableFilter<"meeting_room"> | string | null
    capacity?: IntNullableFilter<"meeting_room"> | number | null
    password?: StringNullableFilter<"meeting_room"> | string | null
    meeting_schedule?: Meeting_scheduleListRelationFilter
  }

  export type meeting_roomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    meeting_schedule?: meeting_scheduleOrderByRelationAggregateInput
  }

  export type meeting_roomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: meeting_roomWhereInput | meeting_roomWhereInput[]
    OR?: meeting_roomWhereInput[]
    NOT?: meeting_roomWhereInput | meeting_roomWhereInput[]
    name?: StringFilter<"meeting_room"> | string
    location?: StringNullableFilter<"meeting_room"> | string | null
    capacity?: IntNullableFilter<"meeting_room"> | number | null
    password?: StringNullableFilter<"meeting_room"> | string | null
    meeting_schedule?: Meeting_scheduleListRelationFilter
  }, "id">

  export type meeting_roomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: meeting_roomCountOrderByAggregateInput
    _avg?: meeting_roomAvgOrderByAggregateInput
    _max?: meeting_roomMaxOrderByAggregateInput
    _min?: meeting_roomMinOrderByAggregateInput
    _sum?: meeting_roomSumOrderByAggregateInput
  }

  export type meeting_roomScalarWhereWithAggregatesInput = {
    AND?: meeting_roomScalarWhereWithAggregatesInput | meeting_roomScalarWhereWithAggregatesInput[]
    OR?: meeting_roomScalarWhereWithAggregatesInput[]
    NOT?: meeting_roomScalarWhereWithAggregatesInput | meeting_roomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"meeting_room"> | string
    name?: StringWithAggregatesFilter<"meeting_room"> | string
    location?: StringNullableWithAggregatesFilter<"meeting_room"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"meeting_room"> | number | null
    password?: StringNullableWithAggregatesFilter<"meeting_room"> | string | null
  }

  export type meeting_scheduleWhereInput = {
    AND?: meeting_scheduleWhereInput | meeting_scheduleWhereInput[]
    OR?: meeting_scheduleWhereInput[]
    NOT?: meeting_scheduleWhereInput | meeting_scheduleWhereInput[]
    id?: IntFilter<"meeting_schedule"> | number
    meeting_room_id?: StringNullableFilter<"meeting_schedule"> | string | null
    start_time?: DateTimeFilter<"meeting_schedule"> | Date | string
    end_time?: DateTimeFilter<"meeting_schedule"> | Date | string
    meeting_comments?: Meeting_commentsListRelationFilter
    meeting_room?: XOR<Meeting_roomNullableScalarRelationFilter, meeting_roomWhereInput> | null
  }

  export type meeting_scheduleOrderByWithRelationInput = {
    id?: SortOrder
    meeting_room_id?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    meeting_comments?: meeting_commentsOrderByRelationAggregateInput
    meeting_room?: meeting_roomOrderByWithRelationInput
  }

  export type meeting_scheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: meeting_scheduleWhereInput | meeting_scheduleWhereInput[]
    OR?: meeting_scheduleWhereInput[]
    NOT?: meeting_scheduleWhereInput | meeting_scheduleWhereInput[]
    meeting_room_id?: StringNullableFilter<"meeting_schedule"> | string | null
    start_time?: DateTimeFilter<"meeting_schedule"> | Date | string
    end_time?: DateTimeFilter<"meeting_schedule"> | Date | string
    meeting_comments?: Meeting_commentsListRelationFilter
    meeting_room?: XOR<Meeting_roomNullableScalarRelationFilter, meeting_roomWhereInput> | null
  }, "id">

  export type meeting_scheduleOrderByWithAggregationInput = {
    id?: SortOrder
    meeting_room_id?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: meeting_scheduleCountOrderByAggregateInput
    _avg?: meeting_scheduleAvgOrderByAggregateInput
    _max?: meeting_scheduleMaxOrderByAggregateInput
    _min?: meeting_scheduleMinOrderByAggregateInput
    _sum?: meeting_scheduleSumOrderByAggregateInput
  }

  export type meeting_scheduleScalarWhereWithAggregatesInput = {
    AND?: meeting_scheduleScalarWhereWithAggregatesInput | meeting_scheduleScalarWhereWithAggregatesInput[]
    OR?: meeting_scheduleScalarWhereWithAggregatesInput[]
    NOT?: meeting_scheduleScalarWhereWithAggregatesInput | meeting_scheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"meeting_schedule"> | number
    meeting_room_id?: StringNullableWithAggregatesFilter<"meeting_schedule"> | string | null
    start_time?: DateTimeWithAggregatesFilter<"meeting_schedule"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"meeting_schedule"> | Date | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntNullableFilter<"notifications"> | number | null
    message?: StringFilter<"notifications"> | string
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: IntNullableFilter<"notifications"> | number | null
    message?: StringFilter<"notifications"> | string
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    user_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    message?: StringWithAggregatesFilter<"notifications"> | string
    is_read?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: IntFilter<"tasks"> | number
    board_id?: IntNullableFilter<"tasks"> | number | null
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    assigned_to?: IntNullableFilter<"tasks"> | number | null
    created_by?: IntNullableFilter<"tasks"> | number | null
    updated_by?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    comments?: CommentsListRelationFilter
    users_tasks_assigned_toTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    boards?: XOR<BoardsNullableScalarRelationFilter, boardsWhereInput> | null
    users_tasks_created_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_tasks_updated_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    board_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    assigned_to?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    users_tasks_assigned_toTousers?: usersOrderByWithRelationInput
    boards?: boardsOrderByWithRelationInput
    users_tasks_created_byTousers?: usersOrderByWithRelationInput
    users_tasks_updated_byTousers?: usersOrderByWithRelationInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    board_id?: IntNullableFilter<"tasks"> | number | null
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    assigned_to?: IntNullableFilter<"tasks"> | number | null
    created_by?: IntNullableFilter<"tasks"> | number | null
    updated_by?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    comments?: CommentsListRelationFilter
    users_tasks_assigned_toTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    boards?: XOR<BoardsNullableScalarRelationFilter, boardsWhereInput> | null
    users_tasks_created_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_tasks_updated_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    board_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    assigned_to?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tasks"> | number
    board_id?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    title?: StringWithAggregatesFilter<"tasks"> | string
    description?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    status?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    assigned_to?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    created_by?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    boards?: BoardsListRelationFilter
    comments?: CommentsListRelationFilter
    meeting_comments?: Meeting_commentsListRelationFilter
    notifications?: NotificationsListRelationFilter
    tasks_tasks_assigned_toTousers?: TasksListRelationFilter
    tasks_tasks_created_byTousers?: TasksListRelationFilter
    tasks_tasks_updated_byTousers?: TasksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    boards?: boardsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    meeting_comments?: meeting_commentsOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    tasks_tasks_assigned_toTousers?: tasksOrderByRelationAggregateInput
    tasks_tasks_created_byTousers?: tasksOrderByRelationAggregateInput
    tasks_tasks_updated_byTousers?: tasksOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    boards?: BoardsListRelationFilter
    comments?: CommentsListRelationFilter
    meeting_comments?: Meeting_commentsListRelationFilter
    notifications?: NotificationsListRelationFilter
    tasks_tasks_assigned_toTousers?: TasksListRelationFilter
    tasks_tasks_created_byTousers?: TasksListRelationFilter
    tasks_tasks_updated_byTousers?: TasksListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type boardsCreateInput = {
    name: string
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutBoardsInput
    tasks?: tasksCreateNestedManyWithoutBoardsInput
  }

  export type boardsUncheckedCreateInput = {
    id?: number
    name: string
    created_by?: number | null
    created_at?: Date | string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutBoardsNestedInput
    tasks?: tasksUpdateManyWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type boardsCreateManyInput = {
    id?: number
    name: string
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type boardsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type boardsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateInput = {
    comment: string
    created_at?: Date | string | null
    tasks?: tasksCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    task_id?: number | null
    user_id?: number | null
    comment: string
    created_at?: Date | string | null
  }

  export type commentsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyInput = {
    id?: number
    task_id?: number | null
    user_id?: number | null
    comment: string
    created_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_commentsCreateInput = {
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
    meeting_schedule?: meeting_scheduleCreateNestedOneWithoutMeeting_commentsInput
    users?: usersCreateNestedOneWithoutMeeting_commentsInput
  }

  export type meeting_commentsUncheckedCreateInput = {
    id?: number
    meeting_schedule_id?: number | null
    user_id?: number | null
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type meeting_commentsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting_schedule?: meeting_scheduleUpdateOneWithoutMeeting_commentsNestedInput
    users?: usersUpdateOneWithoutMeeting_commentsNestedInput
  }

  export type meeting_commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_schedule_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_commentsCreateManyInput = {
    id?: number
    meeting_schedule_id?: number | null
    user_id?: number | null
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type meeting_commentsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_schedule_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_roomCreateInput = {
    id: string
    name: string
    location?: string | null
    capacity?: number | null
    password?: string | null
    meeting_schedule?: meeting_scheduleCreateNestedManyWithoutMeeting_roomInput
  }

  export type meeting_roomUncheckedCreateInput = {
    id: string
    name: string
    location?: string | null
    capacity?: number | null
    password?: string | null
    meeting_schedule?: meeting_scheduleUncheckedCreateNestedManyWithoutMeeting_roomInput
  }

  export type meeting_roomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_schedule?: meeting_scheduleUpdateManyWithoutMeeting_roomNestedInput
  }

  export type meeting_roomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    meeting_schedule?: meeting_scheduleUncheckedUpdateManyWithoutMeeting_roomNestedInput
  }

  export type meeting_roomCreateManyInput = {
    id: string
    name: string
    location?: string | null
    capacity?: number | null
    password?: string | null
  }

  export type meeting_roomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meeting_roomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meeting_scheduleCreateInput = {
    start_time: Date | string
    end_time: Date | string
    meeting_comments?: meeting_commentsCreateNestedManyWithoutMeeting_scheduleInput
    meeting_room?: meeting_roomCreateNestedOneWithoutMeeting_scheduleInput
  }

  export type meeting_scheduleUncheckedCreateInput = {
    id?: number
    meeting_room_id?: string | null
    start_time: Date | string
    end_time: Date | string
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutMeeting_scheduleInput
  }

  export type meeting_scheduleUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_comments?: meeting_commentsUpdateManyWithoutMeeting_scheduleNestedInput
    meeting_room?: meeting_roomUpdateOneWithoutMeeting_scheduleNestedInput
  }

  export type meeting_scheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_room_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutMeeting_scheduleNestedInput
  }

  export type meeting_scheduleCreateManyInput = {
    id?: number
    meeting_room_id?: string | null
    start_time: Date | string
    end_time: Date | string
  }

  export type meeting_scheduleUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meeting_scheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_room_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateInput = {
    message: string
    is_read?: boolean | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    message: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id?: number | null
    message: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksCreateInput = {
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutTasksInput
    users_tasks_assigned_toTousers?: usersCreateNestedOneWithoutTasks_tasks_assigned_toTousersInput
    boards?: boardsCreateNestedOneWithoutTasksInput
    users_tasks_created_byTousers?: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
  }

  export type tasksUncheckedCreateInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutTasksNestedInput
    users_tasks_assigned_toTousers?: usersUpdateOneWithoutTasks_tasks_assigned_toTousersNestedInput
    boards?: boardsUpdateOneWithoutTasksNestedInput
    users_tasks_created_byTousers?: usersUpdateOneWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksCreateManyInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type boardsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type boardsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type boardsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type boardsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type boardsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TasksNullableScalarRelationFilter = {
    is?: tasksWhereInput | null
    isNot?: tasksWhereInput | null
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Meeting_scheduleNullableScalarRelationFilter = {
    is?: meeting_scheduleWhereInput | null
    isNot?: meeting_scheduleWhereInput | null
  }

  export type meeting_commentsCountOrderByAggregateInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type meeting_commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrder
    user_id?: SortOrder
  }

  export type meeting_commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type meeting_commentsMinOrderByAggregateInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type meeting_commentsSumOrderByAggregateInput = {
    id?: SortOrder
    meeting_schedule_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Meeting_scheduleListRelationFilter = {
    every?: meeting_scheduleWhereInput
    some?: meeting_scheduleWhereInput
    none?: meeting_scheduleWhereInput
  }

  export type meeting_scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meeting_roomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    password?: SortOrder
  }

  export type meeting_roomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type meeting_roomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    password?: SortOrder
  }

  export type meeting_roomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    password?: SortOrder
  }

  export type meeting_roomSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Meeting_commentsListRelationFilter = {
    every?: meeting_commentsWhereInput
    some?: meeting_commentsWhereInput
    none?: meeting_commentsWhereInput
  }

  export type Meeting_roomNullableScalarRelationFilter = {
    is?: meeting_roomWhereInput | null
    isNot?: meeting_roomWhereInput | null
  }

  export type meeting_commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meeting_scheduleCountOrderByAggregateInput = {
    id?: SortOrder
    meeting_room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type meeting_scheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type meeting_scheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    meeting_room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type meeting_scheduleMinOrderByAggregateInput = {
    id?: SortOrder
    meeting_room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type meeting_scheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type BoardsNullableScalarRelationFilter = {
    is?: boardsWhereInput | null
    isNot?: boardsWhereInput | null
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    due_date?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    due_date?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    due_date?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type BoardsListRelationFilter = {
    every?: boardsWhereInput
    some?: boardsWhereInput
    none?: boardsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type boardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutBoardsInput = {
    create?: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBoardsInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedManyWithoutBoardsInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutBoardsInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutBoardsNestedInput = {
    create?: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBoardsInput
    upsert?: usersUpsertWithoutBoardsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBoardsInput, usersUpdateWithoutBoardsInput>, usersUncheckedUpdateWithoutBoardsInput>
  }

  export type tasksUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutBoardsInput | tasksUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutBoardsInput | tasksUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutBoardsInput | tasksUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tasksUncheckedUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutBoardsInput | tasksUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutBoardsInput | tasksUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutBoardsInput | tasksUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksCreateNestedOneWithoutCommentsInput = {
    create?: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutCommentsInput
    connect?: tasksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type tasksUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutCommentsInput
    upsert?: tasksUpsertWithoutCommentsInput
    disconnect?: tasksWhereInput | boolean
    delete?: tasksWhereInput | boolean
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutCommentsInput, tasksUpdateWithoutCommentsInput>, tasksUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type meeting_scheduleCreateNestedOneWithoutMeeting_commentsInput = {
    create?: XOR<meeting_scheduleCreateWithoutMeeting_commentsInput, meeting_scheduleUncheckedCreateWithoutMeeting_commentsInput>
    connectOrCreate?: meeting_scheduleCreateOrConnectWithoutMeeting_commentsInput
    connect?: meeting_scheduleWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMeeting_commentsInput = {
    create?: XOR<usersCreateWithoutMeeting_commentsInput, usersUncheckedCreateWithoutMeeting_commentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMeeting_commentsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type meeting_scheduleUpdateOneWithoutMeeting_commentsNestedInput = {
    create?: XOR<meeting_scheduleCreateWithoutMeeting_commentsInput, meeting_scheduleUncheckedCreateWithoutMeeting_commentsInput>
    connectOrCreate?: meeting_scheduleCreateOrConnectWithoutMeeting_commentsInput
    upsert?: meeting_scheduleUpsertWithoutMeeting_commentsInput
    disconnect?: meeting_scheduleWhereInput | boolean
    delete?: meeting_scheduleWhereInput | boolean
    connect?: meeting_scheduleWhereUniqueInput
    update?: XOR<XOR<meeting_scheduleUpdateToOneWithWhereWithoutMeeting_commentsInput, meeting_scheduleUpdateWithoutMeeting_commentsInput>, meeting_scheduleUncheckedUpdateWithoutMeeting_commentsInput>
  }

  export type usersUpdateOneWithoutMeeting_commentsNestedInput = {
    create?: XOR<usersCreateWithoutMeeting_commentsInput, usersUncheckedCreateWithoutMeeting_commentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMeeting_commentsInput
    upsert?: usersUpsertWithoutMeeting_commentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMeeting_commentsInput, usersUpdateWithoutMeeting_commentsInput>, usersUncheckedUpdateWithoutMeeting_commentsInput>
  }

  export type meeting_scheduleCreateNestedManyWithoutMeeting_roomInput = {
    create?: XOR<meeting_scheduleCreateWithoutMeeting_roomInput, meeting_scheduleUncheckedCreateWithoutMeeting_roomInput> | meeting_scheduleCreateWithoutMeeting_roomInput[] | meeting_scheduleUncheckedCreateWithoutMeeting_roomInput[]
    connectOrCreate?: meeting_scheduleCreateOrConnectWithoutMeeting_roomInput | meeting_scheduleCreateOrConnectWithoutMeeting_roomInput[]
    createMany?: meeting_scheduleCreateManyMeeting_roomInputEnvelope
    connect?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
  }

  export type meeting_scheduleUncheckedCreateNestedManyWithoutMeeting_roomInput = {
    create?: XOR<meeting_scheduleCreateWithoutMeeting_roomInput, meeting_scheduleUncheckedCreateWithoutMeeting_roomInput> | meeting_scheduleCreateWithoutMeeting_roomInput[] | meeting_scheduleUncheckedCreateWithoutMeeting_roomInput[]
    connectOrCreate?: meeting_scheduleCreateOrConnectWithoutMeeting_roomInput | meeting_scheduleCreateOrConnectWithoutMeeting_roomInput[]
    createMany?: meeting_scheduleCreateManyMeeting_roomInputEnvelope
    connect?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
  }

  export type meeting_scheduleUpdateManyWithoutMeeting_roomNestedInput = {
    create?: XOR<meeting_scheduleCreateWithoutMeeting_roomInput, meeting_scheduleUncheckedCreateWithoutMeeting_roomInput> | meeting_scheduleCreateWithoutMeeting_roomInput[] | meeting_scheduleUncheckedCreateWithoutMeeting_roomInput[]
    connectOrCreate?: meeting_scheduleCreateOrConnectWithoutMeeting_roomInput | meeting_scheduleCreateOrConnectWithoutMeeting_roomInput[]
    upsert?: meeting_scheduleUpsertWithWhereUniqueWithoutMeeting_roomInput | meeting_scheduleUpsertWithWhereUniqueWithoutMeeting_roomInput[]
    createMany?: meeting_scheduleCreateManyMeeting_roomInputEnvelope
    set?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    disconnect?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    delete?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    connect?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    update?: meeting_scheduleUpdateWithWhereUniqueWithoutMeeting_roomInput | meeting_scheduleUpdateWithWhereUniqueWithoutMeeting_roomInput[]
    updateMany?: meeting_scheduleUpdateManyWithWhereWithoutMeeting_roomInput | meeting_scheduleUpdateManyWithWhereWithoutMeeting_roomInput[]
    deleteMany?: meeting_scheduleScalarWhereInput | meeting_scheduleScalarWhereInput[]
  }

  export type meeting_scheduleUncheckedUpdateManyWithoutMeeting_roomNestedInput = {
    create?: XOR<meeting_scheduleCreateWithoutMeeting_roomInput, meeting_scheduleUncheckedCreateWithoutMeeting_roomInput> | meeting_scheduleCreateWithoutMeeting_roomInput[] | meeting_scheduleUncheckedCreateWithoutMeeting_roomInput[]
    connectOrCreate?: meeting_scheduleCreateOrConnectWithoutMeeting_roomInput | meeting_scheduleCreateOrConnectWithoutMeeting_roomInput[]
    upsert?: meeting_scheduleUpsertWithWhereUniqueWithoutMeeting_roomInput | meeting_scheduleUpsertWithWhereUniqueWithoutMeeting_roomInput[]
    createMany?: meeting_scheduleCreateManyMeeting_roomInputEnvelope
    set?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    disconnect?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    delete?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    connect?: meeting_scheduleWhereUniqueInput | meeting_scheduleWhereUniqueInput[]
    update?: meeting_scheduleUpdateWithWhereUniqueWithoutMeeting_roomInput | meeting_scheduleUpdateWithWhereUniqueWithoutMeeting_roomInput[]
    updateMany?: meeting_scheduleUpdateManyWithWhereWithoutMeeting_roomInput | meeting_scheduleUpdateManyWithWhereWithoutMeeting_roomInput[]
    deleteMany?: meeting_scheduleScalarWhereInput | meeting_scheduleScalarWhereInput[]
  }

  export type meeting_commentsCreateNestedManyWithoutMeeting_scheduleInput = {
    create?: XOR<meeting_commentsCreateWithoutMeeting_scheduleInput, meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput> | meeting_commentsCreateWithoutMeeting_scheduleInput[] | meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput | meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput[]
    createMany?: meeting_commentsCreateManyMeeting_scheduleInputEnvelope
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
  }

  export type meeting_roomCreateNestedOneWithoutMeeting_scheduleInput = {
    create?: XOR<meeting_roomCreateWithoutMeeting_scheduleInput, meeting_roomUncheckedCreateWithoutMeeting_scheduleInput>
    connectOrCreate?: meeting_roomCreateOrConnectWithoutMeeting_scheduleInput
    connect?: meeting_roomWhereUniqueInput
  }

  export type meeting_commentsUncheckedCreateNestedManyWithoutMeeting_scheduleInput = {
    create?: XOR<meeting_commentsCreateWithoutMeeting_scheduleInput, meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput> | meeting_commentsCreateWithoutMeeting_scheduleInput[] | meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput | meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput[]
    createMany?: meeting_commentsCreateManyMeeting_scheduleInputEnvelope
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type meeting_commentsUpdateManyWithoutMeeting_scheduleNestedInput = {
    create?: XOR<meeting_commentsCreateWithoutMeeting_scheduleInput, meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput> | meeting_commentsCreateWithoutMeeting_scheduleInput[] | meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput | meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput[]
    upsert?: meeting_commentsUpsertWithWhereUniqueWithoutMeeting_scheduleInput | meeting_commentsUpsertWithWhereUniqueWithoutMeeting_scheduleInput[]
    createMany?: meeting_commentsCreateManyMeeting_scheduleInputEnvelope
    set?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    disconnect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    delete?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    update?: meeting_commentsUpdateWithWhereUniqueWithoutMeeting_scheduleInput | meeting_commentsUpdateWithWhereUniqueWithoutMeeting_scheduleInput[]
    updateMany?: meeting_commentsUpdateManyWithWhereWithoutMeeting_scheduleInput | meeting_commentsUpdateManyWithWhereWithoutMeeting_scheduleInput[]
    deleteMany?: meeting_commentsScalarWhereInput | meeting_commentsScalarWhereInput[]
  }

  export type meeting_roomUpdateOneWithoutMeeting_scheduleNestedInput = {
    create?: XOR<meeting_roomCreateWithoutMeeting_scheduleInput, meeting_roomUncheckedCreateWithoutMeeting_scheduleInput>
    connectOrCreate?: meeting_roomCreateOrConnectWithoutMeeting_scheduleInput
    upsert?: meeting_roomUpsertWithoutMeeting_scheduleInput
    disconnect?: meeting_roomWhereInput | boolean
    delete?: meeting_roomWhereInput | boolean
    connect?: meeting_roomWhereUniqueInput
    update?: XOR<XOR<meeting_roomUpdateToOneWithWhereWithoutMeeting_scheduleInput, meeting_roomUpdateWithoutMeeting_scheduleInput>, meeting_roomUncheckedUpdateWithoutMeeting_scheduleInput>
  }

  export type meeting_commentsUncheckedUpdateManyWithoutMeeting_scheduleNestedInput = {
    create?: XOR<meeting_commentsCreateWithoutMeeting_scheduleInput, meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput> | meeting_commentsCreateWithoutMeeting_scheduleInput[] | meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput | meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput[]
    upsert?: meeting_commentsUpsertWithWhereUniqueWithoutMeeting_scheduleInput | meeting_commentsUpsertWithWhereUniqueWithoutMeeting_scheduleInput[]
    createMany?: meeting_commentsCreateManyMeeting_scheduleInputEnvelope
    set?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    disconnect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    delete?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    update?: meeting_commentsUpdateWithWhereUniqueWithoutMeeting_scheduleInput | meeting_commentsUpdateWithWhereUniqueWithoutMeeting_scheduleInput[]
    updateMany?: meeting_commentsUpdateManyWithWhereWithoutMeeting_scheduleInput | meeting_commentsUpdateManyWithWhereWithoutMeeting_scheduleInput[]
    deleteMany?: meeting_commentsScalarWhereInput | meeting_commentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotificationsInput, usersUpdateWithoutNotificationsInput>, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type commentsCreateNestedManyWithoutTasksInput = {
    create?: XOR<commentsCreateWithoutTasksInput, commentsUncheckedCreateWithoutTasksInput> | commentsCreateWithoutTasksInput[] | commentsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTasksInput | commentsCreateOrConnectWithoutTasksInput[]
    createMany?: commentsCreateManyTasksInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTasks_tasks_assigned_toTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_assigned_toTousersInput, usersUncheckedCreateWithoutTasks_tasks_assigned_toTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_assigned_toTousersInput
    connect?: usersWhereUniqueInput
  }

  export type boardsCreateNestedOneWithoutTasksInput = {
    create?: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: boardsCreateOrConnectWithoutTasksInput
    connect?: boardsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<commentsCreateWithoutTasksInput, commentsUncheckedCreateWithoutTasksInput> | commentsCreateWithoutTasksInput[] | commentsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTasksInput | commentsCreateOrConnectWithoutTasksInput[]
    createMany?: commentsCreateManyTasksInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type commentsUpdateManyWithoutTasksNestedInput = {
    create?: XOR<commentsCreateWithoutTasksInput, commentsUncheckedCreateWithoutTasksInput> | commentsCreateWithoutTasksInput[] | commentsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTasksInput | commentsCreateOrConnectWithoutTasksInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutTasksInput | commentsUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: commentsCreateManyTasksInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutTasksInput | commentsUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutTasksInput | commentsUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutTasks_tasks_assigned_toTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_assigned_toTousersInput, usersUncheckedCreateWithoutTasks_tasks_assigned_toTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_assigned_toTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_assigned_toTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_assigned_toTousersInput, usersUpdateWithoutTasks_tasks_assigned_toTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_assigned_toTousersInput>
  }

  export type boardsUpdateOneWithoutTasksNestedInput = {
    create?: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: boardsCreateOrConnectWithoutTasksInput
    upsert?: boardsUpsertWithoutTasksInput
    disconnect?: boardsWhereInput | boolean
    delete?: boardsWhereInput | boolean
    connect?: boardsWhereUniqueInput
    update?: XOR<XOR<boardsUpdateToOneWithWhereWithoutTasksInput, boardsUpdateWithoutTasksInput>, boardsUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateOneWithoutTasks_tasks_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_created_byTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_created_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_created_byTousersInput, usersUpdateWithoutTasks_tasks_created_byTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput>
  }

  export type usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_updated_byTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_updated_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_updated_byTousersInput, usersUpdateWithoutTasks_tasks_updated_byTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput>
  }

  export type commentsUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<commentsCreateWithoutTasksInput, commentsUncheckedCreateWithoutTasksInput> | commentsCreateWithoutTasksInput[] | commentsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTasksInput | commentsCreateOrConnectWithoutTasksInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutTasksInput | commentsUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: commentsCreateManyTasksInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutTasksInput | commentsUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutTasksInput | commentsUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type boardsCreateNestedManyWithoutUsersInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type meeting_commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<meeting_commentsCreateWithoutUsersInput, meeting_commentsUncheckedCreateWithoutUsersInput> | meeting_commentsCreateWithoutUsersInput[] | meeting_commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutUsersInput | meeting_commentsCreateOrConnectWithoutUsersInput[]
    createMany?: meeting_commentsCreateManyUsersInputEnvelope
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput> | tasksCreateWithoutUsers_tasks_assigned_toTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assigned_toTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type boardsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type meeting_commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<meeting_commentsCreateWithoutUsersInput, meeting_commentsUncheckedCreateWithoutUsersInput> | meeting_commentsCreateWithoutUsersInput[] | meeting_commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutUsersInput | meeting_commentsCreateOrConnectWithoutUsersInput[]
    createMany?: meeting_commentsCreateManyUsersInputEnvelope
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput> | tasksCreateWithoutUsers_tasks_assigned_toTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assigned_toTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type boardsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    upsert?: boardsUpsertWithWhereUniqueWithoutUsersInput | boardsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    set?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    disconnect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    delete?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    update?: boardsUpdateWithWhereUniqueWithoutUsersInput | boardsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: boardsUpdateManyWithWhereWithoutUsersInput | boardsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: boardsScalarWhereInput | boardsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type meeting_commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<meeting_commentsCreateWithoutUsersInput, meeting_commentsUncheckedCreateWithoutUsersInput> | meeting_commentsCreateWithoutUsersInput[] | meeting_commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutUsersInput | meeting_commentsCreateOrConnectWithoutUsersInput[]
    upsert?: meeting_commentsUpsertWithWhereUniqueWithoutUsersInput | meeting_commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: meeting_commentsCreateManyUsersInputEnvelope
    set?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    disconnect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    delete?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    update?: meeting_commentsUpdateWithWhereUniqueWithoutUsersInput | meeting_commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: meeting_commentsUpdateManyWithWhereWithoutUsersInput | meeting_commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: meeting_commentsScalarWhereInput | meeting_commentsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput> | tasksCreateWithoutUsers_tasks_assigned_toTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assigned_toTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_assigned_toTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_assigned_toTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type boardsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    upsert?: boardsUpsertWithWhereUniqueWithoutUsersInput | boardsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    set?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    disconnect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    delete?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    update?: boardsUpdateWithWhereUniqueWithoutUsersInput | boardsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: boardsUpdateManyWithWhereWithoutUsersInput | boardsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: boardsScalarWhereInput | boardsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<meeting_commentsCreateWithoutUsersInput, meeting_commentsUncheckedCreateWithoutUsersInput> | meeting_commentsCreateWithoutUsersInput[] | meeting_commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meeting_commentsCreateOrConnectWithoutUsersInput | meeting_commentsCreateOrConnectWithoutUsersInput[]
    upsert?: meeting_commentsUpsertWithWhereUniqueWithoutUsersInput | meeting_commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: meeting_commentsCreateManyUsersInputEnvelope
    set?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    disconnect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    delete?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    connect?: meeting_commentsWhereUniqueInput | meeting_commentsWhereUniqueInput[]
    update?: meeting_commentsUpdateWithWhereUniqueWithoutUsersInput | meeting_commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: meeting_commentsUpdateManyWithWhereWithoutUsersInput | meeting_commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: meeting_commentsScalarWhereInput | meeting_commentsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput> | tasksCreateWithoutUsers_tasks_assigned_toTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assigned_toTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_assigned_toTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_assigned_toTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput> | tasksCreateWithoutUsers_tasks_created_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_created_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput> | tasksCreateWithoutUsers_tasks_updated_byTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput | tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutBoardsInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutBoardsInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutBoardsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
  }

  export type tasksCreateWithoutBoardsInput = {
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutTasksInput
    users_tasks_assigned_toTousers?: usersCreateNestedOneWithoutTasks_tasks_assigned_toTousersInput
    users_tasks_created_byTousers?: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
  }

  export type tasksUncheckedCreateWithoutBoardsInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutBoardsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput>
  }

  export type tasksCreateManyBoardsInputEnvelope = {
    data: tasksCreateManyBoardsInput | tasksCreateManyBoardsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutBoardsInput = {
    update: XOR<usersUpdateWithoutBoardsInput, usersUncheckedUpdateWithoutBoardsInput>
    create: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBoardsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBoardsInput, usersUncheckedUpdateWithoutBoardsInput>
  }

  export type usersUpdateWithoutBoardsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type tasksUpsertWithWhereUniqueWithoutBoardsInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutBoardsInput, tasksUncheckedUpdateWithoutBoardsInput>
    create: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutBoardsInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutBoardsInput, tasksUncheckedUpdateWithoutBoardsInput>
  }

  export type tasksUpdateManyWithWhereWithoutBoardsInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutBoardsInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: IntFilter<"tasks"> | number
    board_id?: IntNullableFilter<"tasks"> | number | null
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    assigned_to?: IntNullableFilter<"tasks"> | number | null
    created_by?: IntNullableFilter<"tasks"> | number | null
    updated_by?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
  }

  export type tasksCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_tasks_assigned_toTousers?: usersCreateNestedOneWithoutTasks_tasks_assigned_toTousersInput
    boards?: boardsCreateNestedOneWithoutTasksInput
    users_tasks_created_byTousers?: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
  }

  export type tasksUncheckedCreateWithoutCommentsInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksCreateOrConnectWithoutCommentsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type tasksUpsertWithoutCommentsInput = {
    update: XOR<tasksUpdateWithoutCommentsInput, tasksUncheckedUpdateWithoutCommentsInput>
    create: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutCommentsInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutCommentsInput, tasksUncheckedUpdateWithoutCommentsInput>
  }

  export type tasksUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_tasks_assigned_toTousers?: usersUpdateOneWithoutTasks_tasks_assigned_toTousersNestedInput
    boards?: boardsUpdateOneWithoutTasksNestedInput
    users_tasks_created_byTousers?: usersUpdateOneWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
  }

  export type tasksUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type meeting_scheduleCreateWithoutMeeting_commentsInput = {
    start_time: Date | string
    end_time: Date | string
    meeting_room?: meeting_roomCreateNestedOneWithoutMeeting_scheduleInput
  }

  export type meeting_scheduleUncheckedCreateWithoutMeeting_commentsInput = {
    id?: number
    meeting_room_id?: string | null
    start_time: Date | string
    end_time: Date | string
  }

  export type meeting_scheduleCreateOrConnectWithoutMeeting_commentsInput = {
    where: meeting_scheduleWhereUniqueInput
    create: XOR<meeting_scheduleCreateWithoutMeeting_commentsInput, meeting_scheduleUncheckedCreateWithoutMeeting_commentsInput>
  }

  export type usersCreateWithoutMeeting_commentsInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutMeeting_commentsInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutMeeting_commentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMeeting_commentsInput, usersUncheckedCreateWithoutMeeting_commentsInput>
  }

  export type meeting_scheduleUpsertWithoutMeeting_commentsInput = {
    update: XOR<meeting_scheduleUpdateWithoutMeeting_commentsInput, meeting_scheduleUncheckedUpdateWithoutMeeting_commentsInput>
    create: XOR<meeting_scheduleCreateWithoutMeeting_commentsInput, meeting_scheduleUncheckedCreateWithoutMeeting_commentsInput>
    where?: meeting_scheduleWhereInput
  }

  export type meeting_scheduleUpdateToOneWithWhereWithoutMeeting_commentsInput = {
    where?: meeting_scheduleWhereInput
    data: XOR<meeting_scheduleUpdateWithoutMeeting_commentsInput, meeting_scheduleUncheckedUpdateWithoutMeeting_commentsInput>
  }

  export type meeting_scheduleUpdateWithoutMeeting_commentsInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_room?: meeting_roomUpdateOneWithoutMeeting_scheduleNestedInput
  }

  export type meeting_scheduleUncheckedUpdateWithoutMeeting_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_room_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutMeeting_commentsInput = {
    update: XOR<usersUpdateWithoutMeeting_commentsInput, usersUncheckedUpdateWithoutMeeting_commentsInput>
    create: XOR<usersCreateWithoutMeeting_commentsInput, usersUncheckedCreateWithoutMeeting_commentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMeeting_commentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMeeting_commentsInput, usersUncheckedUpdateWithoutMeeting_commentsInput>
  }

  export type usersUpdateWithoutMeeting_commentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutMeeting_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type meeting_scheduleCreateWithoutMeeting_roomInput = {
    start_time: Date | string
    end_time: Date | string
    meeting_comments?: meeting_commentsCreateNestedManyWithoutMeeting_scheduleInput
  }

  export type meeting_scheduleUncheckedCreateWithoutMeeting_roomInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutMeeting_scheduleInput
  }

  export type meeting_scheduleCreateOrConnectWithoutMeeting_roomInput = {
    where: meeting_scheduleWhereUniqueInput
    create: XOR<meeting_scheduleCreateWithoutMeeting_roomInput, meeting_scheduleUncheckedCreateWithoutMeeting_roomInput>
  }

  export type meeting_scheduleCreateManyMeeting_roomInputEnvelope = {
    data: meeting_scheduleCreateManyMeeting_roomInput | meeting_scheduleCreateManyMeeting_roomInput[]
    skipDuplicates?: boolean
  }

  export type meeting_scheduleUpsertWithWhereUniqueWithoutMeeting_roomInput = {
    where: meeting_scheduleWhereUniqueInput
    update: XOR<meeting_scheduleUpdateWithoutMeeting_roomInput, meeting_scheduleUncheckedUpdateWithoutMeeting_roomInput>
    create: XOR<meeting_scheduleCreateWithoutMeeting_roomInput, meeting_scheduleUncheckedCreateWithoutMeeting_roomInput>
  }

  export type meeting_scheduleUpdateWithWhereUniqueWithoutMeeting_roomInput = {
    where: meeting_scheduleWhereUniqueInput
    data: XOR<meeting_scheduleUpdateWithoutMeeting_roomInput, meeting_scheduleUncheckedUpdateWithoutMeeting_roomInput>
  }

  export type meeting_scheduleUpdateManyWithWhereWithoutMeeting_roomInput = {
    where: meeting_scheduleScalarWhereInput
    data: XOR<meeting_scheduleUpdateManyMutationInput, meeting_scheduleUncheckedUpdateManyWithoutMeeting_roomInput>
  }

  export type meeting_scheduleScalarWhereInput = {
    AND?: meeting_scheduleScalarWhereInput | meeting_scheduleScalarWhereInput[]
    OR?: meeting_scheduleScalarWhereInput[]
    NOT?: meeting_scheduleScalarWhereInput | meeting_scheduleScalarWhereInput[]
    id?: IntFilter<"meeting_schedule"> | number
    meeting_room_id?: StringNullableFilter<"meeting_schedule"> | string | null
    start_time?: DateTimeFilter<"meeting_schedule"> | Date | string
    end_time?: DateTimeFilter<"meeting_schedule"> | Date | string
  }

  export type meeting_commentsCreateWithoutMeeting_scheduleInput = {
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutMeeting_commentsInput
  }

  export type meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput = {
    id?: number
    user_id?: number | null
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type meeting_commentsCreateOrConnectWithoutMeeting_scheduleInput = {
    where: meeting_commentsWhereUniqueInput
    create: XOR<meeting_commentsCreateWithoutMeeting_scheduleInput, meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput>
  }

  export type meeting_commentsCreateManyMeeting_scheduleInputEnvelope = {
    data: meeting_commentsCreateManyMeeting_scheduleInput | meeting_commentsCreateManyMeeting_scheduleInput[]
    skipDuplicates?: boolean
  }

  export type meeting_roomCreateWithoutMeeting_scheduleInput = {
    id: string
    name: string
    location?: string | null
    capacity?: number | null
    password?: string | null
  }

  export type meeting_roomUncheckedCreateWithoutMeeting_scheduleInput = {
    id: string
    name: string
    location?: string | null
    capacity?: number | null
    password?: string | null
  }

  export type meeting_roomCreateOrConnectWithoutMeeting_scheduleInput = {
    where: meeting_roomWhereUniqueInput
    create: XOR<meeting_roomCreateWithoutMeeting_scheduleInput, meeting_roomUncheckedCreateWithoutMeeting_scheduleInput>
  }

  export type meeting_commentsUpsertWithWhereUniqueWithoutMeeting_scheduleInput = {
    where: meeting_commentsWhereUniqueInput
    update: XOR<meeting_commentsUpdateWithoutMeeting_scheduleInput, meeting_commentsUncheckedUpdateWithoutMeeting_scheduleInput>
    create: XOR<meeting_commentsCreateWithoutMeeting_scheduleInput, meeting_commentsUncheckedCreateWithoutMeeting_scheduleInput>
  }

  export type meeting_commentsUpdateWithWhereUniqueWithoutMeeting_scheduleInput = {
    where: meeting_commentsWhereUniqueInput
    data: XOR<meeting_commentsUpdateWithoutMeeting_scheduleInput, meeting_commentsUncheckedUpdateWithoutMeeting_scheduleInput>
  }

  export type meeting_commentsUpdateManyWithWhereWithoutMeeting_scheduleInput = {
    where: meeting_commentsScalarWhereInput
    data: XOR<meeting_commentsUpdateManyMutationInput, meeting_commentsUncheckedUpdateManyWithoutMeeting_scheduleInput>
  }

  export type meeting_commentsScalarWhereInput = {
    AND?: meeting_commentsScalarWhereInput | meeting_commentsScalarWhereInput[]
    OR?: meeting_commentsScalarWhereInput[]
    NOT?: meeting_commentsScalarWhereInput | meeting_commentsScalarWhereInput[]
    id?: IntFilter<"meeting_comments"> | number
    meeting_schedule_id?: IntNullableFilter<"meeting_comments"> | number | null
    user_id?: IntNullableFilter<"meeting_comments"> | number | null
    comment?: StringFilter<"meeting_comments"> | string
    image_url?: StringNullableFilter<"meeting_comments"> | string | null
    created_at?: DateTimeNullableFilter<"meeting_comments"> | Date | string | null
  }

  export type meeting_roomUpsertWithoutMeeting_scheduleInput = {
    update: XOR<meeting_roomUpdateWithoutMeeting_scheduleInput, meeting_roomUncheckedUpdateWithoutMeeting_scheduleInput>
    create: XOR<meeting_roomCreateWithoutMeeting_scheduleInput, meeting_roomUncheckedCreateWithoutMeeting_scheduleInput>
    where?: meeting_roomWhereInput
  }

  export type meeting_roomUpdateToOneWithWhereWithoutMeeting_scheduleInput = {
    where?: meeting_roomWhereInput
    data: XOR<meeting_roomUpdateWithoutMeeting_scheduleInput, meeting_roomUncheckedUpdateWithoutMeeting_scheduleInput>
  }

  export type meeting_roomUpdateWithoutMeeting_scheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meeting_roomUncheckedUpdateWithoutMeeting_scheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutNotificationsInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type commentsCreateWithoutTasksInput = {
    comment: string
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutTasksInput = {
    id?: number
    user_id?: number | null
    comment: string
    created_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutTasksInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutTasksInput, commentsUncheckedCreateWithoutTasksInput>
  }

  export type commentsCreateManyTasksInputEnvelope = {
    data: commentsCreateManyTasksInput | commentsCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTasks_tasks_assigned_toTousersInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_assigned_toTousersInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_assigned_toTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_assigned_toTousersInput, usersUncheckedCreateWithoutTasks_tasks_assigned_toTousersInput>
  }

  export type boardsCreateWithoutTasksInput = {
    name: string
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutBoardsInput
  }

  export type boardsUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    created_by?: number | null
    created_at?: Date | string | null
  }

  export type boardsCreateOrConnectWithoutTasksInput = {
    where: boardsWhereUniqueInput
    create: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
  }

  export type usersCreateWithoutTasks_tasks_created_byTousersInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_updated_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_updated_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
  }

  export type usersCreateWithoutTasks_tasks_updated_byTousersInput = {
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksCreateNestedManyWithoutUsers_tasks_created_byTousersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput = {
    id?: number
    username: string
    password: string
    email: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    meeting_comments?: meeting_commentsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assigned_toTousersInput
    tasks_tasks_created_byTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_created_byTousersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutTasksInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutTasksInput, commentsUncheckedUpdateWithoutTasksInput>
    create: XOR<commentsCreateWithoutTasksInput, commentsUncheckedCreateWithoutTasksInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutTasksInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutTasksInput, commentsUncheckedUpdateWithoutTasksInput>
  }

  export type commentsUpdateManyWithWhereWithoutTasksInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutTasksInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    task_id?: IntNullableFilter<"comments"> | number | null
    user_id?: IntNullableFilter<"comments"> | number | null
    comment?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type usersUpsertWithoutTasks_tasks_assigned_toTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_assigned_toTousersInput, usersUncheckedUpdateWithoutTasks_tasks_assigned_toTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_assigned_toTousersInput, usersUncheckedCreateWithoutTasks_tasks_assigned_toTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_assigned_toTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_assigned_toTousersInput, usersUncheckedUpdateWithoutTasks_tasks_assigned_toTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_assigned_toTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_assigned_toTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type boardsUpsertWithoutTasksInput = {
    update: XOR<boardsUpdateWithoutTasksInput, boardsUncheckedUpdateWithoutTasksInput>
    create: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
    where?: boardsWhereInput
  }

  export type boardsUpdateToOneWithWhereWithoutTasksInput = {
    where?: boardsWhereInput
    data: XOR<boardsUpdateWithoutTasksInput, boardsUncheckedUpdateWithoutTasksInput>
  }

  export type boardsUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutTasks_tasks_created_byTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_created_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_created_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_created_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_created_byTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_updated_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersNestedInput
  }

  export type usersUpsertWithoutTasks_tasks_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedCreateWithoutTasks_tasks_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_updated_byTousersInput, usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_updated_byTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assigned_toTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersNestedInput
    tasks_tasks_created_byTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersNestedInput
  }

  export type boardsCreateWithoutUsersInput = {
    name: string
    created_at?: Date | string | null
    tasks?: tasksCreateNestedManyWithoutBoardsInput
  }

  export type boardsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsCreateOrConnectWithoutUsersInput = {
    where: boardsWhereUniqueInput
    create: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput>
  }

  export type boardsCreateManyUsersInputEnvelope = {
    data: boardsCreateManyUsersInput | boardsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutUsersInput = {
    comment: string
    created_at?: Date | string | null
    tasks?: tasksCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    task_id?: number | null
    comment: string
    created_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type meeting_commentsCreateWithoutUsersInput = {
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
    meeting_schedule?: meeting_scheduleCreateNestedOneWithoutMeeting_commentsInput
  }

  export type meeting_commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    meeting_schedule_id?: number | null
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type meeting_commentsCreateOrConnectWithoutUsersInput = {
    where: meeting_commentsWhereUniqueInput
    create: XOR<meeting_commentsCreateWithoutUsersInput, meeting_commentsUncheckedCreateWithoutUsersInput>
  }

  export type meeting_commentsCreateManyUsersInputEnvelope = {
    data: meeting_commentsCreateManyUsersInput | meeting_commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsersInput = {
    message: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: number
    message: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateManyUsersInputEnvelope = {
    data: notificationsCreateManyUsersInput | notificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_assigned_toTousersInput = {
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutTasksInput
    boards?: boardsCreateNestedOneWithoutTasksInput
    users_tasks_created_byTousers?: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_assigned_toTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput>
  }

  export type tasksCreateManyUsers_tasks_assigned_toTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_assigned_toTousersInput | tasksCreateManyUsers_tasks_assigned_toTousersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_created_byTousersInput = {
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutTasksInput
    users_tasks_assigned_toTousers?: usersCreateNestedOneWithoutTasks_tasks_assigned_toTousersInput
    boards?: boardsCreateNestedOneWithoutTasksInput
    users_tasks_updated_byTousers?: usersCreateNestedOneWithoutTasks_tasks_updated_byTousersInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_created_byTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksCreateManyUsers_tasks_created_byTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_created_byTousersInput | tasksCreateManyUsers_tasks_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_updated_byTousersInput = {
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutTasksInput
    users_tasks_assigned_toTousers?: usersCreateNestedOneWithoutTasks_tasks_assigned_toTousersInput
    boards?: boardsCreateNestedOneWithoutTasksInput
    users_tasks_created_byTousers?: usersCreateNestedOneWithoutTasks_tasks_created_byTousersInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksCreateManyUsers_tasks_updated_byTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_updated_byTousersInput | tasksCreateManyUsers_tasks_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type boardsUpsertWithWhereUniqueWithoutUsersInput = {
    where: boardsWhereUniqueInput
    update: XOR<boardsUpdateWithoutUsersInput, boardsUncheckedUpdateWithoutUsersInput>
    create: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput>
  }

  export type boardsUpdateWithWhereUniqueWithoutUsersInput = {
    where: boardsWhereUniqueInput
    data: XOR<boardsUpdateWithoutUsersInput, boardsUncheckedUpdateWithoutUsersInput>
  }

  export type boardsUpdateManyWithWhereWithoutUsersInput = {
    where: boardsScalarWhereInput
    data: XOR<boardsUpdateManyMutationInput, boardsUncheckedUpdateManyWithoutUsersInput>
  }

  export type boardsScalarWhereInput = {
    AND?: boardsScalarWhereInput | boardsScalarWhereInput[]
    OR?: boardsScalarWhereInput[]
    NOT?: boardsScalarWhereInput | boardsScalarWhereInput[]
    id?: IntFilter<"boards"> | number
    name?: StringFilter<"boards"> | string
    created_by?: IntNullableFilter<"boards"> | number | null
    created_at?: DateTimeNullableFilter<"boards"> | Date | string | null
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type meeting_commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: meeting_commentsWhereUniqueInput
    update: XOR<meeting_commentsUpdateWithoutUsersInput, meeting_commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<meeting_commentsCreateWithoutUsersInput, meeting_commentsUncheckedCreateWithoutUsersInput>
  }

  export type meeting_commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: meeting_commentsWhereUniqueInput
    data: XOR<meeting_commentsUpdateWithoutUsersInput, meeting_commentsUncheckedUpdateWithoutUsersInput>
  }

  export type meeting_commentsUpdateManyWithWhereWithoutUsersInput = {
    where: meeting_commentsScalarWhereInput
    data: XOR<meeting_commentsUpdateManyMutationInput, meeting_commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntNullableFilter<"notifications"> | number | null
    message?: StringFilter<"notifications"> | string
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_assigned_toTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assigned_toTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_assigned_toTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_assigned_toTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_assigned_toTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_assigned_toTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_created_byTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_created_byTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_created_byTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_created_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_created_byTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_updated_byTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedCreateWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_updated_byTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_updated_byTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersInput>
  }

  export type tasksCreateManyBoardsInput = {
    id?: number
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksUpdateWithoutBoardsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutTasksNestedInput
    users_tasks_assigned_toTousers?: usersUpdateOneWithoutTasks_tasks_assigned_toTousersNestedInput
    users_tasks_created_byTousers?: usersUpdateOneWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
  }

  export type tasksUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_scheduleCreateManyMeeting_roomInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
  }

  export type meeting_scheduleUpdateWithoutMeeting_roomInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_comments?: meeting_commentsUpdateManyWithoutMeeting_scheduleNestedInput
  }

  export type meeting_scheduleUncheckedUpdateWithoutMeeting_roomInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_comments?: meeting_commentsUncheckedUpdateManyWithoutMeeting_scheduleNestedInput
  }

  export type meeting_scheduleUncheckedUpdateManyWithoutMeeting_roomInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meeting_commentsCreateManyMeeting_scheduleInput = {
    id?: number
    user_id?: number | null
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type meeting_commentsUpdateWithoutMeeting_scheduleInput = {
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutMeeting_commentsNestedInput
  }

  export type meeting_commentsUncheckedUpdateWithoutMeeting_scheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_commentsUncheckedUpdateManyWithoutMeeting_scheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyTasksInput = {
    id?: number
    user_id?: number | null
    comment: string
    created_at?: Date | string | null
  }

  export type commentsUpdateWithoutTasksInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type boardsCreateManyUsersInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    task_id?: number | null
    comment: string
    created_at?: Date | string | null
  }

  export type meeting_commentsCreateManyUsersInput = {
    id?: number
    meeting_schedule_id?: number | null
    comment: string
    image_url?: string | null
    created_at?: Date | string | null
  }

  export type notificationsCreateManyUsersInput = {
    id?: number
    message: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type tasksCreateManyUsers_tasks_assigned_toTousersInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksCreateManyUsers_tasks_created_byTousersInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    updated_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksCreateManyUsers_tasks_updated_byTousersInput = {
    id?: number
    board_id?: number | null
    title: string
    description?: string | null
    status?: string | null
    due_date?: Date | string | null
    assigned_to?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type boardsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUpdateManyWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUpdateWithoutUsersInput = {
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_commentsUpdateWithoutUsersInput = {
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting_schedule?: meeting_scheduleUpdateOneWithoutMeeting_commentsNestedInput
  }

  export type meeting_commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_schedule_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meeting_commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    meeting_schedule_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_assigned_toTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutTasksNestedInput
    boards?: boardsUpdateOneWithoutTasksNestedInput
    users_tasks_created_byTousers?: usersUpdateOneWithoutTasks_tasks_created_byTousersNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_assigned_toTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_assigned_toTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_created_byTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutTasksNestedInput
    users_tasks_assigned_toTousers?: usersUpdateOneWithoutTasks_tasks_assigned_toTousersNestedInput
    boards?: boardsUpdateOneWithoutTasksNestedInput
    users_tasks_updated_byTousers?: usersUpdateOneWithoutTasks_tasks_updated_byTousersNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_updated_byTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutTasksNestedInput
    users_tasks_assigned_toTousers?: usersUpdateOneWithoutTasks_tasks_assigned_toTousersNestedInput
    boards?: boardsUpdateOneWithoutTasksNestedInput
    users_tasks_created_byTousers?: usersUpdateOneWithoutTasks_tasks_created_byTousersNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}